<script>
	import routes from '../routes';
	export let active;
</script>

<style>
	.active {
		font-size: 20px;
	}
</style>

<header>
	🌎 Geography Games
</header>
{active.path}
{#each Object.entries(routes) as [name, route], i}
	<a href="#{route.path}" class="{active.path === route.path ? "active" : ""}">{name}</a>
{/each}
