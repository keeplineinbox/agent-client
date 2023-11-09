import {Component, signal} from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ButtonModule,
  ],
})
export class ProductsComponent {
  isAuthenticated = signal(!!window.Telegram.WebApp?.initDataUnsafe?.user);
  userName = signal(window.Telegram.WebApp?.initDataUnsafe?.user?.first_name);
  isLoading = signal(false);
}
