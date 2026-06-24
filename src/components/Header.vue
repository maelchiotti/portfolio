<script setup lang="ts">
	import { useColorMode } from "@vueuse/core";

	const colorMode = useColorMode();

	defineShortcuts({
		meta_alt_t: () => {
			colorMode.value = colorMode.value === "dark" ? "light" : "dark";
		},
	});
</script>

<template>
	<UHeader>
		<template #left>
			<ULink
				as="button"
				to="/"
				raw
				><div class="flex items-center gap-4">
					<UAvatar
						src="https://github.com/maelchiotti.png"
						loading="lazy"
						size="xl"
						alt="Maël Chiotti"
					/>
					<p class="text-xl font-bold">Maël Chiotti</p>
				</div></ULink
			>
		</template>

		<template #right>
			<div class="flex items-center gap-4">
				<div class="flex items-center gap-2">
					<UTooltip text="Voir mon profil GitHub">
						<UButton
							color="neutral"
							variant="ghost"
							to="https://github.com/maelchiotti"
							target="_blank"
							icon="simple-icons:github"
							aria-label="Voir mon profil GitHub"
						/>
					</UTooltip>

					<UTooltip text="Voir mon profil LinkedIn">
						<UButton
							color="neutral"
							variant="ghost"
							to="https://www.linkedin.com/in/maelchiotti"
							target="_blank"
							icon="simple-icons:linkedin"
							aria-label="Voir mon profil LinkedIn"
						/>
					</UTooltip>

					<UTooltip text="Me contact par email">
						<UButton
							color="neutral"
							variant="ghost"
							to="mailto:contact@maelchiotti.dev"
							target="_blank"
							icon="lucide:mail"
							aria-label="Me contact par email"
						/>
					</UTooltip>

					<UTooltip text="Découvrir la chaîne YouTube 'Studio Rv & Co'">
						<UButton
							color="neutral"
							variant="ghost"
							to="https://www.youtube.com/@studiorvandco"
							target="_blank"
							icon="simple-icons:youtube"
							aria-label="Découvrir la chaîne YouTube 'Studio Rv & Co'"
						/>
					</UTooltip>
				</div>

				<USeparator
					orientation="vertical"
					class="h-8"
				/>

				<UTooltip
					text="Changer le thème"
					:kbds="['meta', 'alt', 'T']"
				>
					<UColorModeButton />
				</UTooltip>
			</div>
		</template>
	</UHeader>
</template>
