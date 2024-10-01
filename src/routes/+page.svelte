<script>
	import { Button, Heading, P, Span } from 'svelte-5-ui-lib';
	import { ChevronRightOutline } from 'flowbite-svelte-icons';
	import { fly } from 'svelte/transition';

	let introAni = $state(false);

	$effect(() => {
		introAni = true;
	});
</script>

<div class=" mt-2 flex h-[70vh] w-full max-w-7xl flex-col items-center justify-center gap-2 p-2">
	<div class=" flex max-w-3xl flex-col items-center gap-4 p-2">
		{#if introAni}
			<div in:fly={{ y: -20, duration: 500, delay: 0 }}>
				<Heading tag="h1" class="mb-2 text-3xl font-extrabold md:text-5xl lg:text-6xl">
					Hi, I'm <Span gradient="tealToLime">Rohit Tokala</Span>.
				</Heading>
			</div>
			<div in:fly={{ y: -20, duration: 500, delay: 200 }}>
				<P size="xl" weight="medium" align="center"
					>A Full Stack Web Developer currently pursuing my MSc. in Artificial Intelligence and
					Computer Science.</P
				>
			</div>
			<div
				in:fly={{ y: -20, duration: 500, delay: 400 }}
				class=" flex w-full flex-col items-center justify-center gap-4 md:flex-row"
			>
				<Button
					size="xl"
					href="/projects"
					class="w-56 px-6 py-3 text-teal-300 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700"
					>My Projects<ChevronRightOutline class=" ml-1 h-7 w-7" /></Button
				>
				<Button size="xl" href="/contact" class="w-56 px-6 py-3 text-black"
					>Get in touch with Me!</Button
				>
			</div>
		{/if}
	</div>
</div>
