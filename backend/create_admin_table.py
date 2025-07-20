#!/usr/bin/env python3
"""
Migration script to create the admins table and initial admin user.
Run this once to set up the new admin system with 2FA support.
"""

import os
import sys
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from passlib.context import CryptContext

# Add the project root to the path so we can import our modules
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.database.database import get_database_url
from app.database.models import Base, Admin

def main():
    """Create the admins table and initial admin user."""
    print("🔧 Creating admins table and initial admin user...")
    
    # Get database URL
    database_url = get_database_url()
    engine = create_engine(database_url)
    
    # Create tables
    print("📋 Creating admins table...")
    Base.metadata.create_all(bind=engine, tables=[Admin.__table__])
    
    # Create session
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    session = SessionLocal()
    
    try:
        # Check if we already have admins
        existing_admin = session.query(Admin).first()
        if existing_admin:
            print("⚠️  Admin table already has users. Skipping initial admin creation.")
            print(f"   Existing admin: {existing_admin.email}")
            return
        
        # Get admin credentials from environment
        admin_email = os.getenv("admin_email")
        admin_password = os.getenv("admin_password")
        
        if not admin_email or not admin_password:
            print("❌ Error: admin_email and admin_password environment variables must be set.")
            print("   Please set these in your .env file or environment.")
            return
        
        # Create password hash
        pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
        password_hash = pwd_context.hash(admin_password)
        
        # Create initial admin user
        initial_admin = Admin(
            email=admin_email,
            name="Super Administrator", 
            password_hash=password_hash,
            is_super_admin=True,
            is_active=True,
            two_factor_enabled=False,  # Start with 2FA disabled, can be enabled via admin panel
            created_by=None  # Initial admin has no creator
        )
        
        session.add(initial_admin)
        session.commit()
        
        print("✅ Successfully created admins table and initial admin user!")
        print(f"   📧 Admin email: {admin_email}")
        print(f"   🔐 2FA: Disabled (can be enabled in admin panel)")
        print(f"   👑 Super Admin: Yes")
        print("")
        print("🎯 Next steps:")
        print("   1. Log in to the admin panel with your credentials")
        print("   2. Enable 2FA for enhanced security")
        print("   3. Create additional admin users if needed")
        
    except Exception as e:
        print(f"❌ Error creating admin user: {e}")
        session.rollback()
        raise
    finally:
        session.close()

if __name__ == "__main__":
    main() 