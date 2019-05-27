import PaginaPrincipal from './components/PaginaPrincipal/component';
import Album from './components/Album/component';

const routesConfig = [
  {
    path: "/",
    component: PaginaPrincipal,
    exact: true
  },
  {
    path: "/album",
    component: Album,
    exact: true
  },
]

export default routesConfig;