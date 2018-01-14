import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

import { MEAT_API } from '../../app.api';
import { User } from './user.model';


@Injectable()
export class LoginService {
    user: User;
    lastUrl: string;

    constructor(private http: HttpClient, private router: Router) {
        // tslint:disable-next-line:comment-format
        //this.router.events.subscrive((e: NavigationEnd) => this.lastUrl =  e.url)
        this.router.events
        .filter(e =>  e instanceof NavigationEnd)
        .subscribe((e: NavigationEnd) => this.lastUrl =  e.url );

        console.log(this.lastUrl)
    }

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    login(email: string, password: string): Observable<User> {
        return this.http
            .post<User>(`${MEAT_API}/login`, { email: email, password: password })
            .do(user => this.user = user);
    }

    handleLogin(path: string = this.lastUrl) {
        this.router.navigate(['/login', btoa(path)]);
    }
    logout() {
        this.user = undefined;
    }
}