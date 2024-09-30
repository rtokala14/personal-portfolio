<script>
	import '../app.css';
	import { Navbar, NavBrand, NavUl, NavLi } from 'svelte-5-ui-lib';

	let { children } = $props();
</script>

<Navbar breakPoint="md" hamburgerMenu={true}>
	{#snippet brand()}
		<NavBrand siteName="Rohit Tokala"></NavBrand>
	{/snippet}
	<NavUl class="order-1">
		<NavLi href="/">Home</NavLi>
		<NavLi href="/components/navbar">Navbar</NavLi>
		<NavLi href="/components/footer">Footer</NavLi>
	</NavUl>
</Navbar>
{@render children()}
