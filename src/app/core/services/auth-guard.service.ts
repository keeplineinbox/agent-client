
import {Injectable, signal} from '@angular/core';
import {ActivatedRouteSnapshot, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable()
export class AuthGuardService {
  constructor(private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!!window.Telegram.WebApp?.initDataUnsafe?.user) {
      return true;
    }
    return true;
    //return this.router.parseUrl('/unauthorized');
  }
}