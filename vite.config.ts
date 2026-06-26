import ui from "@nuxt/ui/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
// oxlint-disable-next-line import/no-default-export
export default defineConfig({
	plugins: [vue(), vueJsx(), vueDevTools(), ui(), cloudflare()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});