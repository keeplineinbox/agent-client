import {Component} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu-osgovts',
  templateUrl: './menu-osgovts.component.html',
  styleUrls: [],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonModule,
  ],
})
export class MenuOsgovtsComponent {
  constructor()
  { }

}