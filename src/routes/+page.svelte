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
	<!-- Landing Hero -->
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

<!-- ScrollWheel -->
<div class=" flex h-[40vh] w-full max-w-4xl flex-col items-center gap-4">
	<h2 class=" text-3xl font-extrabold uppercase tracking-wider text-primary-600">My Toolkit</h2>
	<div class=" flex flex-wrap items-center justify-center gap-4 *:h-20 *:rounded-lg *:shadow-md">
		<img src="/react.png" alt="React Web Framework" />
		<img src="/github.png" alt="React Web Framework" />
		<img src="/nextjs.png" alt="React Web Framework" />
		<img src="/svelte.png" alt="React Web Framework" />
		<img src="/pytorch.png" alt="React Web Framework" />
		<img src="/python.png" alt="React Web Framework" />
		<img src="/flask.png" alt="React Web Framework" />
		<img src="/docker.png" alt="React Web Framework" />
		<img src="/aws.png" alt="React Web Framework" />
	</div>
</div>
