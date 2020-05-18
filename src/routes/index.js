import Capitals from './Capitals.svelte';
import Flags from './Flags.svelte';
import Home from './Home.svelte';

const routes = {
  Home: {
    path: '/',
    Component: Home,
  },
  Flags: {
    path: '/flags',
    Component: Flags,
  },
  Capitals: {
    path: '/capitals',
    Component: Capitals
  }
}

export default routes;
