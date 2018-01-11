import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { LoginService } from 'app/security/login/login.service';

@Injectable()
export class LoggedinInGuard implements CanLoad, CanActivate {

    /**
     *Alciomar é muito Lindo
     */
    constructor(private loginService: LoginService) {
    }
    checkAuthentication(path: string): boolean {
        const loggedIn = this.loginService.isLoggedIn()

        if (!loggedIn) {
            this.loginService.handleLogin(`/${path}`);
        }
        return loggedIn;
    }

    canLoad(route: Route): boolean {
        console.log('canLoad')
        return this.checkAuthentication(route.path);
    }
    canActivate(activateRouter: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        console.log('canActivate')
        return this.checkAuthentication(activateRouter.routeConfig.path)
    }
}
