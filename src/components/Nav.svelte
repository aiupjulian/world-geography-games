<script>
  import routes from '../routes';
  export let active;
</script>

<header>
  <a href="#{routes.Home.path}" class="logo">🌎 Geography Games</a>
  <nav>
    {#each Object.entries(routes).slice(1) as [name, route], i}
      <a href="#{route.path}" class:active={active.path === route.path}>{name}</a>
    {/each}
  </nav>
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.8rem;
  }
  .logo {
    font-size: 1.6rem;
    font-weight: bold;
  }
  nav {
    margin-top: 1rem;
  }
  nav a {
    margin: 0.5rem;
  }
  .active {
    border-bottom: 2px solid;
  }
  @media (min-width: 768px) {
    header {
      flex-direction: row;
      justify-content: space-between;
    }
    nav {
      margin-top: 0;
    }
  }
</style>
