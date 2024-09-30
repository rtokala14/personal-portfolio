<script>
	import '../app.css';
	import { Navbar, NavBrand, NavUl, NavLi, uiHelpers, Button, NavHamburger } from 'svelte-5-ui-lib';

	let { children } = $props();
	let nav = uiHelpers();
	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;
	$effect(() => {
		navStatus = nav.isOpen;
	});
</script>

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
