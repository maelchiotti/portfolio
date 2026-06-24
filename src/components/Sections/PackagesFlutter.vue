<script setup lang="ts">
	import type { ButtonProps, PageFeatureProps } from "@nuxt/ui";

	import { ref, provide } from "vue";

	const features = ref<PageFeatureProps[]>([
		{
			title: "flutter_checklist",
			description: "Un widget pour afficher une liste de contrôles.",
			icon: "lucide:copy-check",
			to: "https://pub.dev/packages/flutter_checklist",
			target: "_blank",
		},
		{
			title: "settings_tiles",
			description: "Une collection de tuiles de paramètres pour créer facilement un écran de paramètres.",
			icon: "lucide:settings",
			to: "https://pub.dev/packages/settings_tiles",
			target: "_blank",
		},
		{
			title: "flag_secure",
			description: "Un plugin pour gérer le flag Android 'FLAG_SECURE' en temps réel.",
			icon: "lucide:flag",
			to: "https://pub.dev/packages/flag_secure",
			target: "_blank",
		},
	]);

	const links = ref<ButtonProps[]>([
		{
			label: "pub.dev",
			to: "https://pub.dev/publishers/maelchiotti.dev/packages",
			icon: "simple-icons:dart",
			color: "neutral",
		},
	]);
</script>

<template>
	<UPageSection
		title="Packages Flutter"
		description="Packages et plugins pour Dart et Flutter."
		icon="simple-icons:flutter"
		:features="features"
		:links="links"
	/>
</template>
