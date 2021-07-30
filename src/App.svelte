<script>
  import { onMount } from 'svelte';
  import routes from './routes';
  import Nav from './components/Nav.svelte';

  let active = routes.Home;
  // Router
  async function hashchange() {
    const path = window.location.hash.slice(1);
    active = Object.values(routes).find((route) => route.path === path) || routes.Home;
    window.scrollTo(0, 0);
  }
  onMount(hashchange);
</script>

<svelte:window on:hashchange={hashchange} />
<Nav {active} />
<main>
  <svelte:component this={active.Component} />
</main>

<style>
  main {
    padding: 1em;
    max-width: 700px;
    margin: 0 auto;
  }
</style>
