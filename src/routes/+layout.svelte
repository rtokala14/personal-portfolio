<script lang="ts">
	import '../app.css';
	import {
		Navbar,
		NavBrand,
		NavUl,
		NavLi,
		uiHelpers,
		Button,
		NavHamburger,
		Footer,
		FooterBrand,
		FooterLi,
		FooterUl,
		FooterCopyright,
		FooterIcon
	} from 'svelte-5-ui-lib';
	import { GithubSolid, LinkedinSolid, XSolid, EnvelopeSolid } from 'flowbite-svelte-icons';

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

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}
</script>

<svelte:window on:mousemove={handleMouseMove} />

<!-- Background spotlight -->
<div
	class="absolute inset-0 -z-50 opacity-10"
	style:background-image=" radial-gradient(circle at {mouseX}px {mouseY}px, rgba(79, 209, 197, 0.3)
	0%, rgba(79, 209, 197, 0) 50%)"
></div>

<!-- NavBar -->
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
			<Button class="text-black" size="md" href="/contact">Contact Me!</Button>
		</div>
	{/snippet}
	<NavUl class="order-1 *:dark:bg-gray-800 md:dark:bg-gray-800">
		<NavLi href="/">Home</NavLi>
		<NavLi href="/projects">Projects</NavLi>
		<!-- <NavLi href="/about">About Me</NavLi> -->
	</NavUl>
</Navbar>

<!-- Social Links -->
<div class=" fixed right-1 top-1/2 z-50 flex w-10 -translate-y-1/2 flex-col rounded-l-md">
	<Button
		target="_blank"
		referrerpolicy="no-referrer"
		class="rounded-none rounded-tl-md "
		color="light"
		href="https://github.com/rtokala14"><GithubSolid class="h-7 w-7" /></Button
	>
	<Button
		target="_blank"
		referrerpolicy="no-referrer"
		class="rounded-none"
		color="light"
		href="https://linkedin.com/in/rohit-tokala"><LinkedinSolid class="h-7 w-7" /></Button
	>
	<Button
		target="_blank"
		referrerpolicy="no-referrer"
		class="rounded-none"
		color="light"
		href="https://x.com/TokalaRohit"><XSolid class="h-7 w-7" /></Button
	>
	<Button
		target="_blank"
		referrerpolicy="no-referrer"
		class="rounded-none rounded-bl-md"
		color="light"
		href="mailto://tokalarr@gmail.com"><EnvelopeSolid class="h-7 w-7" /></Button
	>
</div>

<!-- Main Content -->
{@render children()}

<!-- Footer -->

<Footer footerType="socialmedia" class="w-full max-w-5xl">
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<FooterBrand href="/" src="/svelte.png" alt="Rohit Tokala" name="Rohit Tokala" />
		</div>
		<div class="grid grid-cols-2 gap-8">
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Explore</h2>
				<FooterUl>
					<FooterLi liClass="mb-4" href="/about">About Me</FooterLi>
					<FooterLi liClass="mb-4" href="/projects">My Projects</FooterLi>
				</FooterUl>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Dive In</h2>
				<FooterUl>
					<FooterLi liClass="mb-4" href="/">Blog</FooterLi>
					<FooterLi liClass="mb-4" href="/contact">Contact Me</FooterLi>
				</FooterUl>
			</div>
		</div>
	</div>
	<hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright href="/" by="Rohit Tokala" />
		<div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
			<FooterIcon
				target="_blank"
				referrerpolicy="no-referrer"
				href="https://linkedin.com/in/rohit-tokala"
			>
				<LinkedinSolid
					class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon target="_blank" referrerpolicy="no-referrer" href="mailto://tokalarr@gmail.com">
				<EnvelopeSolid
					class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon target="_blank" referrerpolicy="no-referrer" href="https://x.com/TokalaRohit">
				<XSolid
					class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon target="_blank" referrerpolicy="no-referrer" href="https://github.com/rtokala14">
				<GithubSolid
					class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
		</div>
	</div>
</Footer>
