<script lang="ts">
	import { Button, Card, P } from 'svelte-5-ui-lib';

	let {
		src,
		alt,
		title,
		desc,
		href,
		gitLink
	}: { src: string; alt: string; title: string; desc: string; href?: string; gitLink?: string } =
		$props();
</script>

<Card size="md" class=" border border-primary-700 " shadow="xl" padding="sm" img={{ src, alt }}>
	<h3 class=" mb-2 text-xl font-semibold">{title}</h3>
	<P class=" mb-4 line-clamp-4">
		{desc}
	</P>
	<div class=" flex items-center gap-2">
		{#if gitLink}
			<Button
				href={gitLink}
				class="  w-full"
				size="lg"
				color="light"
				target="_blank"
				referrerpolicy="no-referrer"
			>
				Github
			</Button>
		{/if}
		{#if href}
			<Button
				{href}
				class=" w-full text-black"
				size="lg"
				color="teal"
				target="_blank"
				referrerpolicy="no-referrer">Live Page</Button
			>
		{/if}
	</div>
</Card>
