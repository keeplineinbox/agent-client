import {Routes} from '@angular/router';
import {AuthGuardService} from '../../../core/services/auth-guard.service';
import {CreateOsgovtsComponent} from './create-osgovts/create-osgovts.component';
import {EditOsgovtsComponent} from './edit-osgovts/edit-osgovts.component';
import {RenewOsgovtsComponent} from './renew-osgovts/renew-osgovts.component';
import {MenuOsgovtsComponent} from './menu-osgovts/menu-osgovts.component';


export const OSGOVTS_ROUTES: Routes = [
  {
    path: '',
    component: MenuOsgovtsComponent,
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: '',
    },
  },
  {
    path: 'create',
    component: CreateOsgovtsComponent,
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Create',
    },
  },
  {
    path: 'edit',
    component: EditOsgovtsComponent,
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Edit',
    },
  },
  {
    path: 'renew',
    component: RenewOsgovtsComponent,
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Renew',
    },
  },
];