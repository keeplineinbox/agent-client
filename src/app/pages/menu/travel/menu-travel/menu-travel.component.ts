import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-menu-travel',
  templateUrl: './menu-travel.component.html',
  styleUrls: [],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
})
export class MenuTravelComponent {
  constructor() { }
}