<script setup lang="ts">
	import type { ButtonProps } from "@nuxt/ui";

	import { ref } from "vue";

	const links = ref<ButtonProps[]>([
		{
			label: "GitHub",
			to: "https://github.com/maelchiotti",
			icon: "simple-icons:github",
			target: "_blank",
			color: "neutral",
		},
		{
			label: "LinkedIn",
			to: "https://www.linkedin.com/in/maelchiotti",
			icon: "simple-icons:linkedin",
			target: "_blank",
			color: "neutral",
		},
		{
			label: "Me contacter",
			to: "mailto:contact@maelchiotti.dev",
			icon: "lucide:mail",
			target: "_blank",
			color: "neutral",
		},
		{
			label: "Découvrir le Studio Rv & Co",
			to: "https://www.youtube.com/@studiorvandco",
			icon: "simple-icons:youtube",
			target: "_blank",
			color: "neutral",
		},
	]);
</script>

<template>
	<UMain>
		<UPage>
			<UPageHero
				title="Maël Chiotti"
				description="Développeur full-stack"
				:ui="{ container: 'gap-y-8 md:gap-y-16 lg:gap-y-20 sm:gap-y-12', description: 'text-xl sm:text-3xl' }"
				:links="links"
				reverse
			>
				<div class="flex w-full justify-center">
					<UAvatar
						src="https://github.com/maelchiotti.png"
						loading="lazy"
						alt="Maël Chiotti"
						:ui="{ root: 'size-18 md:size-38 lg:size-48 sm:size-28' }"
					/>
				</div>

				<template #links>
					<div class="flex w-full flex-col items-center gap-4">
						<div class="flex flex-wrap justify-center gap-4">
							<UButton
								color="neutral"
								to="https://github.com/maelchiotti"
								target="_blank"
								icon="simple-icons:github"
								label="GitHub"
								size="xl"
							/>
							<UButton
								color="neutral"
								to="https://www.linkedin.com/in/maelchiotti"
								target="_blank"
								icon="simple-icons:linkedin"
								label="LinkedIn"
								size="xl"
							/>
						</div>

						<div class="flex flex-wrap justify-center gap-4">
							<UButton
								color="neutral"
								variant="subtle"
								to="mailto:contact@maelchiotti.dev"
								target="_blank"
								icon="lucide:mail"
								label="Me contacter"
								size="xl"
							/>
							<UButton
								color="neutral"
								variant="subtle"
								to="https://www.youtube.com/@studiorvandco"
								target="_blank"
								icon="simple-icons:youtube"
								label="Découvrir le Studio Rv & Co"
								size="xl"
							/>
						</div>
					</div>
				</template>
			</UPageHero>

			<UPageBody>
				<MaterialNotes />

				<PackagesFlutter />
			</UPageBody>
		</UPage>
	</UMain>
</template>
