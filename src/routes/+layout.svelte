<script lang="ts">
	import { tweened } from 'svelte/motion';
	import '../app.css';
	import { Navbar, NavBrand, NavUl, NavLi, uiHelpers, Button, NavHamburger } from 'svelte-5-ui-lib';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let { children } = $props();
	let nav = uiHelpers();
	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;
	$effect(() => {
		navStatus = nav.isOpen;
	});

	let mouseX = $state(0);
	let mouseY = $state(0);

	const opacity = tweened(0, {
		duration: 500,
		easing: cubicOut
	});

	onMount(() => {
		opacity.set(1);
	});

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div
	class="absolute inset-0 z-0 opacity-10"
	style:background-image=" radial-gradient(circle at {mouseX}px {mouseY}px, rgba(79, 209, 197, 0.3)
	0%, rgba(79, 209, 197, 0) 50%)"
></div>

<Navbar
	breakPoint="md"
	{toggleNav}
	{closeNav}
	hamburgerMenu={false}
	{navStatus}
	navClass="sticky max-w-5xl mx-auto top-1 z-20 border-b rounded-lg w-[calc(100vw-8px)] border-gray-400 dark:bg-gray-800"
>
	{#snippet brand()}
		<div class=" flex items-center gap-2">
			<NavHamburger {toggleNav} />
			<NavBrand siteName="Rohit Tokala"></NavBrand>
		</div>
	{/snippet}
	{#snippet navSlotBlock()}
		<div class="flex items-center space-x-1 md:order-2">
			<Button size="md">Contact Me!</Button>
		</div>
	{/snippet}
	<NavUl class="order-1 *:dark:bg-gray-800 md:dark:bg-gray-800">
		<NavLi href="/">Home</NavLi>
		<NavLi href="/projects">Projects</NavLi>
		<NavLi href="/about">About Me</NavLi>
	</NavUl>
</Navbar>
{@render children()}
