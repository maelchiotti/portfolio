import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: ".",
	lang: "fr-FR",
	title: "Maël Chiotti",
	description: "Développeur full-stack",
	head: [["link", { rel: "icon", href: "/assets/favicon.ico" }]],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/assets/avatar.png",
		siteTitle: "Maël Chiotti",
		nav: [
			{ text: "splitterr", link: "/splitterr" },
			{ text: "Material Notes", link: "/material_notes" },
			{ text: "Packages Flutter", link: "/packages_flutter" },
		],
		socialLinks: [
			{ icon: "github", link: "https://github.com/maelchiotti" },
			{ icon: "linkedin", link: "https://www.linkedin.com/in/maelchiotti" },
			{ icon: "gmail", link: "mailto:contact@maelchiotti.dev" },
			{ icon: "youtube", link: "https://www.youtube.com/@studiorvandco" },
		],
		footer: {
			message:
				"Généré avec <a href='https://vitepress.dev' target='_blank' rel='noreferrer'>VitePress</a> et le thème <a href='https://vitepress.catppuccin.com' target='_blank' rel='noreferrer'>Catppuccin</a>.<br/>Formatté et linté avec <a href='https://biomejs.dev/' target='_blank' rel='noreferrer'>BiomeJS</a>.",
		},
		externalLinkIcon: true,
	},
	markdown: {
		theme: {
			light: "catppuccin-latte",
			dark: "catppuccin-latte",
		},
	},
	locales: {
		root: {
			lang: "fr",
			label: "Français",
		},
		en: {
			lang: "en",
			label: "English",
		},
	},
});
