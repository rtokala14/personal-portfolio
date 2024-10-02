<script>
	import { Button, Heading, P, Span, Card } from 'svelte-5-ui-lib';
	import { ChevronRightOutline } from 'flowbite-svelte-icons';
	import { fly } from 'svelte/transition';
	import ProjectCard from '$lib/ProjectCard.svelte';

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
<div class=" flex h-[40vh] w-full max-w-4xl flex-col items-center gap-4 px-6">
	<h2 class=" text-3xl font-extrabold uppercase tracking-wider text-primary-600">My Toolkit</h2>
	<div class=" flex flex-wrap items-center justify-center gap-4 *:h-16 *:rounded-lg *:shadow-md">
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

<!-- Featured Projects -->
<div class=" mb-16 flex w-full max-w-4xl flex-col items-center gap-4 px-6">
	<h2 class=" text-3xl font-extrabold uppercase tracking-wider text-primary-600">
		Featured Projects
	</h2>
	<div class=" grid w-full grid-cols-1 items-stretch gap-4 p-2 sm:grid-cols-2">
		<ProjectCard
			desc="A Website for a Restaurant in Dubai, fully optimized for SEO and for the web. Built using
		Sveltekit, styled with TailwindCSS, and deployed Vercel."
			title="HBH - Restaurant Website"
			src="/hbh.webp"
			alt="HBH Website Homepage"
			href="https://hbhdubai.com"
		/>
		<ProjectCard
			desc="A Website for a Restaurant in Dubai, fully optimized for SEO and for the web. Built using
		Sveltekit, styled with TailwindCSS, and deployed Vercel."
			title="HBH - Restaurant Website"
			src="/hbh.webp"
			alt="HBH Website Homepage"
			href="https://hbhdubai.com"
		/><ProjectCard
			desc="A Website for a Restaurant in Dubai, fully optimized for SEO and for the web. Built using
	Sveltekit, styled with TailwindCSS, and deployed Vercel."
			title="HBH - Restaurant Website"
			src="/hbh.webp"
			alt="HBH Website Homepage"
			gitLink="https://gitjsdfkjl"
			href="https://hbhdubai.com"
		/>
		<ProjectCard
			desc="A Website for a Restaurant in Dubai, fully optimized for SEO and for the web. Built using
		Sveltekit, styled with TailwindCSS, and deployed Vercel."
			title="HBH - Restaurant Website"
			src="/hbh.webp"
			alt="HBH Website Homepage"
			href="https://hbhdubai.com"
		/>
	</div>

	<div class="mt-6 flex justify-center">
		<Card class="text-center" size="lg" color="teal" padding="xl">
			<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Learn More</h5>
			<p class="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
				View all my projects, or learn more about me and my interests.
			</p>
			<div
				class="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse"
			>
				<Button color="dark" class=" w-36" size="lg" href="/projects">All Projects</Button>
				<Button color="dark" class=" w-36" size="lg" href="/projects">About Me</Button>
			</div>
		</Card>
	</div>
</div>
