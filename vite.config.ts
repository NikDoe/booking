import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			api: path.resolve(__dirname, "./src/api"),
			components: path.resolve(__dirname, "./src/components"),
			config: path.resolve(__dirname, "./src/config"),
			context: path.resolve(__dirname, "./src/context"),
			hooks: path.resolve(__dirname, "./src/hooks"),
			pages: path.resolve(__dirname, "./src/pages"),
			types: path.resolve(__dirname, "./src/types"),
		},
	},
});
