import react from "@vitejs/plugin-react";
import "dotenv/config";
import path from "node:path";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import injectHTML from "vite-plugin-html-inject";
import tsConfigPaths from "vite-tsconfig-paths";

type Extension = {
	name: string;
	version: string;
	config: Record<string, unknown>;
};

enum ExtensionName {
	FIREBASE_AUTH = "firebase-auth",
	STACK_AUTH = "stack-auth"
}

const listExtensions = (): Extension[] => {
	if (process.env.DATABUTTON_EXTENSIONS) {
		try {
			return JSON.parse(process.env.DATABUTTON_EXTENSIONS) as Extension[];
		} catch (err: unknown) {
			console.error("Error parsing DATABUTTON_EXTENSIONS", err);
			console.error(process.env.DATABUTTON_EXTENSIONS);
			return [];
		}
	}

	return [];
};

const extensions = listExtensions();

const getExtensionConfig = (name: string): string => {
	const extension = extensions.find((it) => it.name === name);

	if (!extension) {
		console.warn(`Extension ${name} not found`);
	}

	return JSON.stringify(extension?.config);
};

const buildVariables = () => {
	const appId = process.env.DATABUTTON_PROJECT_ID;

	const defines: Record<string, string> = {
		__APP_ID__: JSON.stringify(appId),
		__API_PATH__: JSON.stringify(""),
		__API_HOST__: JSON.stringify(""),
		__API_PREFIX_PATH__: JSON.stringify(""),
		__API_URL__: JSON.stringify("http://159.100.250.145"),
		__WS_API_URL__: JSON.stringify("ws://159.100.250.145"),
		__APP_BASE_PATH__: JSON.stringify("/"),
		    __APP_TITLE__: JSON.stringify("HaqNow.com"),
		__APP_FAVICON_LIGHT__: JSON.stringify("/favicon-light.svg"),
		__APP_FAVICON_DARK__: JSON.stringify("/favicon-dark.svg"),
		__APP_DEPLOY_USERNAME__: JSON.stringify(""),
		__APP_DEPLOY_APPNAME__: JSON.stringify(""),
		__APP_DEPLOY_CUSTOM_DOMAIN__: JSON.stringify(""),
		__STACK_AUTH_CONFIG__: JSON.stringify(getExtensionConfig(ExtensionName.STACK_AUTH)),
		__FIREBASE_CONFIG__: JSON.stringify(
			getExtensionConfig(ExtensionName.FIREBASE_AUTH),
		),
	};

	return defines;
};

// https://vite.dev/config/
export default defineConfig({
	define: buildVariables(),
	plugins: [react(), splitVendorChunkPlugin(), tsConfigPaths(), injectHTML()],
	server: {
		proxy: {
			"/routes": {
				target: "http://127.0.0.1:8000",
				changeOrigin: true,
			},
			"/api": {
				target: "http://127.0.0.1:8000",
				changeOrigin: true,
			},
		},
	},
	resolve: {
		alias: {
			"@/components/ui": path.resolve(__dirname, "./src/extensions/shadcn/components"),
			"@/hooks": path.resolve(__dirname, "./src/extensions/shadcn/hooks"),
			"@/lib/utils": path.resolve(__dirname, "./src/lib/utils.ts"),
			"@/lib": path.resolve(__dirname, "./src/lib"),
			"@": path.resolve(__dirname, "./src"),
			"brain": path.resolve(__dirname, "./src/brain"),
			"types": path.resolve(__dirname, "./src/brain/data-contracts.ts"),
			"utils": path.resolve(__dirname, "./src/utils"),
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	},
});
