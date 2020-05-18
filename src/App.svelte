<script>
	import { onMount } from 'svelte';
	import routes from './routes';
	import Nav from './components/Nav.svelte';

	let active = routes.Home;

	async function hashchange() {
		const path = window.location.hash.slice(1);
		active = Object.values(routes).find(route => route.path === path) || routes.Home;
		window.scrollTo(0,0);
	}
	onMount(hashchange);
</script>

<style>
	:global(body) {
		font-family: Montserrat,sans-serif;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<svelte:window on:hashchange={hashchange}/>
<Nav {active} />
<main>
	<svelte:component this={active.Component}/>
</main>
