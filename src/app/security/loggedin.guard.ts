import { CanLoad, Route } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { LoginService } from 'app/security/login/login.service';

@Injectable()
export class LoggedinInGuard implements CanLoad {

    /**
     *Alciomar é muito Lindo
     */
    constructor(private loginService: LoginService) {
    }

    canLoad(route: Route): boolean {
        const loggedIn = this.loginService.isLoggedIn()

        if (!loggedIn) {
            console.log(route);
            this.loginService.handleLogin(`/${route.path}`);
        }
        return loggedIn;
    }
}
