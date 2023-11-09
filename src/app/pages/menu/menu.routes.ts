import {Routes} from '@angular/router';
import {AuthGuardService} from '../../core/services/auth-guard.service';
import {ProductsComponent} from './products/products.component';


export const MENU_ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: '',
    },
  },
  {
    path: 'osgovts',
    loadChildren: () => import('./osgovts').then((m) => m.OSGOVTS_ROUTES),
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Osgovts',
    },
  },
  {
    path: 'travel',
    loadChildren: () => import('./travel').then((m) => m.TRAVEL_ROUTES),
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Travel',
    },
  },
];