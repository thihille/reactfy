import PaginaPrincipal from './views/PaginaPrincipal';
import Album from './views/Album';

const routesConfig = [
  {
    path: "/",
    component: PaginaPrincipal,
    exact: true
  },
  {
    path: "/album/:id",
    component: Album,
    exact: true
  },
]

export default routesConfig;