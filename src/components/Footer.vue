<template>
	<USeparator />

	<UFooter>
		<div class="flex flex-col items-center gap-2">
			<div>
				<div class="flex gap-2">
					<UColorModeButton size="xl" />
					<UButton
						color="neutral"
						variant="ghost"
						to="https://github.com/maelchiotti/portfolio"
						target="_blank"
						icon="simple-icons:github"
						size="xl"
					/>
				</div>
			</div>
			<p class="text-muted text-center">
				Créé avec <ULink to="https://bun.sh">bun</ULink>, <ULink to="https://vuejs.org">Vue.js</ULink>,
				<ULink to="https://ui.nuxt.com">NuxtUI</ULink> et <ULink to="https://oxc.rs">Oxc</ULink>.
			</p>
		</div>
	</UFooter>
</template>
