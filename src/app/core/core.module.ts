import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthGuardService} from './services/auth-guard.service';
import {
  ApiService,
} from './services/api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthGuardService,
    ApiService,
  ],
})
export class CoreModule { }