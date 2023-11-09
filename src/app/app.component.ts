import {Component, Renderer2, OnInit, signal} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import { BackButton } from '@twa-dev/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    CommonModule,
  ],
})
export class AppComponent implements OnInit {
  
  backButton: BackButton = window.Telegram.WebApp?.BackButton;
  isDark = window.Telegram.WebApp?.colorScheme == 'dark' ? true : false;
  isAuthenticated = !!window.Telegram.WebApp?.initDataUnsafe?.user;
  
  ///isDark = false;
  
  constructor(private renderer: Renderer2)
  { 
  }

  get containerClass() {
    console.log('isAuthenticated ' + this.isAuthenticated);
    console.log('isDark ' + this.isDark);
    this.isDark == true? this.renderer.addClass(document.body, 'dark') :  this.renderer.removeClass(document.body, 'dark');
    // if(this.isAuthenticated)
    // {
    //   this.renderer.removeClass(document.body, 'bg-white');
    //   this.renderer.removeClass(document.body, 'bg-white');
    // }
    // else
    // {
    //   this.isDark == true? this.renderer.addClass(document.body, 'bg-black') : this.renderer.addClass(document.body, 'bg-white');
    // }
    return {
        'layout-theme-light': !this.isDark,
        'layout-theme-dark': this.isDark ,
        // 'layout-overlay': this.layoutService.config.menuMode === 'overlay',
        // 'layout-static': this.layoutService.config.menuMode === 'static',
        // 'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
        // 'layout-overlay-active': this.layoutService.state.overlayMenuActive,
        // 'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
        // 'p-input-filled': this.layoutService.config.inputStyle === 'filled',
        // 'p-ripple-disabled': !this.layoutService.config.ripple
    }
  }

  ngOnInit(): void {
    this.backButton.show();
    this.backButton.onClick(() => window.history.back());
  }
}
  //userName = signal(window.Telegram.WebApp?.initDataUnsafe?.user?.first_name);
  //isAuthenticated = signal(!!window.Telegram.WebApp?.initDataUnsafe?.user);
  //apiService = inject(ApiService);
  //isLoading = signal(false);
  //error = signal('');
  // counter$ = this.apiService.countUsers();

  // onSubmit() {
  //   this.isLoading.set(true);
  //   this.error.set('');
  //   this.apiService.submit().pipe(
  //     catchError((e) => {
  //       if(e.message) {
  //         this.error.set(e.error?.message);
  //       }
  //       return EMPTY;
  //     }),
  //     finalize(() => {
  //       this.isLoading.set(false);
  //     })
  //   ).subscribe();
  // }
//}
