import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthHttp,AuthConfig, tokenNotExpired, AUTH_PROVIDERS} from 'angular2-jwt';

import {AuthService} from '../../services/AuthService'



@Component({
    selector: 'protected',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [AUTH_PROVIDERS,AuthService]
})

export class LoginComponent { 

  constructor(private auth: AuthService) {
      this.auth.login();
  }
  login() {
     this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  static loggedIn() {
    return tokenNotExpired();
  }

}