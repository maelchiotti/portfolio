<script setup lang="ts">
	import type { ButtonProps, PageFeatureProps } from "@nuxt/ui";

	import { ref, provide } from "vue";

	const features = ref<PageFeatureProps[]>([
		{
			title: "Flutter",
			description: "Application Android dévelopée avec Flutter en Dart.",
			icon: "material-symbols:flutter",
		},
		{
			title: "Différents types de notes",
			description: "Support de différents types de notes : texte simple, markdown, texte riche et liste de contrôles.",
			icon: "lucide:shapes",
		},
		{
			title: "Fonctionnalités avancées",
			description:
				"Support de la recherche, des étiquettes, de l'épinglage, de l'archivage, du partage, du verrouillage, de l'export et import…",
			icon: "lucide:sparkles",
		},
	]);

	const links = ref<ButtonProps[]>([
		{
			label: "GitHub",
			to: "https://github.com/maelchiotti/LocalMaterialNotes",
			icon: "simple-icons:github",
			color: "neutral",
		},
		{
			label: "Play Store",
			to: "https://play.google.com/store/apps/details?id=com.maelchiotti.localmaterialnotes",
			color: "neutral",
			variant: "subtle",
			icon: "simple-icons:googleplay",
		},
	]);
</script>

<template>
	<UPageSection
		title="Material Notes"
		description="Notes simples, locales, en material design."
		icon="mdi:text"
		:features="features"
		:links="links"
	/>
</template>
