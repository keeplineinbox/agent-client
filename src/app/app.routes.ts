import {Routes} from '@angular/router';
import {Error404Component} from './pages/error404';
import {UnauthorizedComponent} from './pages/unauthorized';


export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu').then((m) => m.MENU_ROUTES),
    data: {
      breadcrumb: 'Menu',
    },
  },
  {
    path: '**',
    redirectTo: '404',
  },
];