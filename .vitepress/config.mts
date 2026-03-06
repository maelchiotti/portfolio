import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "src",
	title: "Maël Chiotti",
	description: "Développeur full-stack et vice-président du Studio Rv & Co",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/assets/avatar.png",
		siteTitle: "Maël Chiotti",
		nav: [{ text: "Projects", link: "/projects" }],
		sidebar: [
			{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
		],
		socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
		search: {
			provider: "local",
		},
	},
});
