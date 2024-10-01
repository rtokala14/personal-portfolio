<script>
	import { Button, Heading, P, Span } from 'svelte-5-ui-lib';
</script>

<div
	class=" z-50 mt-2 flex h-[90vh] w-full max-w-7xl flex-col items-center justify-center gap-2 p-2"
>
	<div class=" flex max-w-4xl flex-col gap-4 p-2">
		<Heading tag="h1" class="mb-2 text-3xl font-extrabold md:text-5xl lg:text-6xl">
			Hi, I'm <Span gradient="tealToLime">Rohit Tokala</Span>.
		</Heading>
		<P size="xl" weight="medium"
			>A Full Stack Web Developer currently pursuing my MSc. in Artificial Intelligence and Computer
			Science.</P
		>
		<div class=" flex w-full flex-col items-center gap-2 md:flex-row">
			<Button size="lg" outline class="dark:bg-gray-900">My Projects</Button>
			<Button size="lg">Get in touch with Me!</Button>
		</div>
	</div>
</div>
