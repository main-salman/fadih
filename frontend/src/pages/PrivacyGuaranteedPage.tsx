import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  Database, 
  FileText, 
  Github, 
  ExternalLink,
  CheckCircle,
  Users
} from "lucide-react";

export default function PrivacyGuaranteedPage() {
  const navigate = useNavigate();

  const privacyFeatures = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Zero IP Storage",
      description: "Completely removed uploader_ip column from database schema. No IP addresses stored anywhere.",
      githubLink: "https://github.com/main-salman/fadih/blob/main/backend/app/database/models.py"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Anonymous Interface",
      description: "All admin interfaces show 'Anonymous' for document submitters. No identifying information displayed.",
      githubLink: "https://github.com/main-salman/fadih/blob/main/frontend/src/pages/AdminApprovedDocumentsPage.tsx"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Privacy-First Upload",
      description: "Upload process completely anonymous. No IP capture during document submission.",
      githubLink: "https://github.com/main-salman/fadih/blob/main/backend/app/apis/file_uploader/__init__.py"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Clean Server Logs",
      description: "Custom nginx log format excludes IP addresses. System logs filtered for privacy.",
      githubLink: "https://github.com/main-salman/fadih/blob/main/backend/app/middleware/rate_limit.py"
    }
  ];

  const privacyGuarantees = [
    "NEVER stores IP addresses in any database",
    "NEVER logs IP addresses in web server logs",
    "NEVER forwards IP addresses to backend applications",
    "NEVER includes identifying information in admin interfaces",
    "NEVER exposes cloud storage infrastructure to users",
    "NEVER tracks or identifies document uploaders"
  ];

  const technicalLayers = [
    {
      layer: "Database Layer",
      description: "Complete IP storage removal and migration",
      status: "✅ COMPLETED"
    },
    {
      layer: "Application Layer",
      description: "Anonymous APIs and interfaces",
      status: "✅ COMPLETED"
    },
    {
      layer: "Web Server Layer",
      description: "Custom log formats and header filtering",
      status: "✅ COMPLETED"
    },
    {
      layer: "System Layer",
      description: "Log filtering and retention policies",
      status: "✅ COMPLETED"
    },
    {
      layer: "Network Layer",
      description: "Proxy downloads and URL masking",
      status: "✅ COMPLETED"
    },
    {
      layer: "Client Layer",
      description: "Clean browser console and masked URLs",
      status: "✅ COMPLETED"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 border-b border-border">
        <div className="container mx-auto">
          <Button variant="outline" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold font-serif">Privacy Guaranteed</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fadih.org provides <strong>COMPLETE ANONYMITY</strong> for corruption document whistleblowers. 
              Every level of our infrastructure has been designed and verified to ensure zero tracking or identification of users.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        {/* Privacy Guarantees Section */}
        <section className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif flex items-center justify-center space-x-2">
                <Lock className="h-6 w-6" />
                <span>Our Privacy Guarantees</span>
              </CardTitle>
              <CardDescription className="text-lg">
                We guarantee that Fadih.org:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {privacyGuarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{guarantee}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-center font-semibold text-green-800 dark:text-green-200">
                  🛡️ Maximum protection for whistleblowers exposing corruption worldwide
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Privacy Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-serif text-center mb-8">Privacy Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privacyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={feature.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-center">Infrastructure-Wide Privacy Protection</CardTitle>
              <CardDescription className="text-center">
                Privacy protections implemented across every layer of our technology stack
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {technicalLayers.map((layer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{layer.layer}</h4>
                      <p className="text-sm text-muted-foreground">{layer.description}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {layer.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Open Source Verification */}
        <section className="mb-12">
          <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center justify-center space-x-2">
                <Eye className="h-6 w-6" />
                <span>Open Source & Transparent</span>
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Our code is public and open to scrutiny - verify our privacy claims yourself
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-0 bg-white/50 dark:bg-gray-800/50">
                  <CardContent className="pt-6">
                    <Github className="h-8 w-8 mx-auto mb-2 text-gray-700 dark:text-gray-300" />
                    <h4 className="font-semibold mb-2">Full Source Code</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Every line of code is public and auditable
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/main-salman/fadih" target="_blank" rel="noopener noreferrer">
                        View Repository
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/50 dark:bg-gray-800/50">
                  <CardContent className="pt-6">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-gray-700 dark:text-gray-300" />
                    <h4 className="font-semibold mb-2">Privacy Implementation</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Detailed privacy code examples and documentation
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/main-salman/fadih/blob/main/README.md#privacy-compliance--anonymity-guarantees" target="_blank" rel="noopener noreferrer">
                        View Privacy Docs
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/50 dark:bg-gray-800/50">
                  <CardContent className="pt-6">
                    <Server className="h-8 w-8 mx-auto mb-2 text-gray-700 dark:text-gray-300" />
                    <h4 className="font-semibold mb-2">Infrastructure Config</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Server configurations and deployment scripts
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/main-salman/fadih/tree/main/terraform" target="_blank" rel="noopener noreferrer">
                        View Infrastructure
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-white/70 dark:bg-gray-800/70 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Key Privacy Code Examples</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <h4 className="font-medium mb-2">🗄️ Database Privacy</h4>
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded block mb-2">
                      # uploader_ip column completely removed<br/>
                      # to_dict() excludes IP from responses
                    </code>
                    <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                      <a href="https://github.com/main-salman/fadih/blob/main/backend/app/database/models.py#L20-L50" target="_blank" rel="noopener noreferrer">
                        View Database Model <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">🌐 Nginx Privacy</h4>
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded block mb-2">
                      log_format privacy_log '$time_local "$request"'<br/>
                      # No $remote_addr (IP) logged
                    </code>
                    <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                      <a href="https://github.com/main-salman/fadih/blob/main/history.txt#L950-L980" target="_blank" rel="noopener noreferrer">
                        View Server Config <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Collaboration Section */}
        <section className="mb-12">
          <Card className="border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/20">
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center justify-center space-x-2">
                <Users className="h-6 w-6" />
                <span>Trusted Collaborators Welcome</span>
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Join our mission to fight corruption through technology and transparency
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="prose dark:prose-invert mx-auto">
                <p className="text-lg">
                  Fadih.org is committed to fighting corruption worldwide through anonymous document exposure. 
                  We welcome security researchers, privacy advocates, journalists, and developers who share our mission.
                </p>
                <p>
                  If you're interested in collaborating on privacy-focused anti-corruption technology, 
                  contributing security audits, or partnering with our transparency initiatives, we'd love to hear from you.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild className="min-w-[200px]">
                  <a href="https://ministryofwoke.com/contact/" target="_blank" rel="noopener noreferrer">
                    <Users className="h-4 w-4 mr-2" />
                    Connect with Us
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
                <Button variant="outline" asChild className="min-w-[200px]">
                  <a href="https://github.com/main-salman/fadih/issues" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Report Issues
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>

              <div className="mt-6 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <p className="text-sm font-medium">
                  <strong>Areas of Interest:</strong> Security auditing, privacy technology, 
                  anti-corruption journalism, transparency tools, whistleblower protection, 
                  and global corruption research.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Details */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-center">Complete Privacy Verification</CardTitle>
              <CardDescription className="text-center">
                All 8 privacy tasks completed with full documentation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-600 dark:text-green-400">✅ Application Level</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Remove uploader_ip column from database</li>
                    <li>• Remove IP storage from upload API</li>
                    <li>• Remove IP from email notifications</li>
                    <li>• Remove IP from application logging</li>
                    <li>• Remove IP from admin interfaces</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-600 dark:text-green-400">✅ Infrastructure Level</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Update rate limiting (anonymous system)</li>
                    <li>• Configure nginx (no IP logs)</li>
                    <li>• Configure system logs (filtered)</li>
                  </ul>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mt-4">🔒 Additional</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• URL masking for downloads</li>
                    <li>• Clean browser console logs</li>
                  </ul>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="text-center">
                <p className="text-lg font-semibold mb-4">
                  🌍 <strong>TOTAL INFRASTRUCTURE-WIDE ANONYMITY ACHIEVED</strong>
                </p>
                <p className="text-muted-foreground">
                  From database storage to web server logs to system logs - no IP addresses are stored, 
                  logged, or tracked anywhere in the entire infrastructure.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
} 