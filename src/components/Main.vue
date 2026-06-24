<template>
	<UMain>
		<UPage>
			<UPageHero
				title="Maël Chiotti"
				description="Développeur full-stack"
				:ui="{ container: 'gap-y-8 md:gap-y-16 lg:gap-y-20 sm:gap-y-12' }"
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
			</UPageHero>

			<UPageBody>
				<MaterialNotes />

				<PackagesFlutter />
			</UPageBody>
		</UPage>
	</UMain>
</template>
