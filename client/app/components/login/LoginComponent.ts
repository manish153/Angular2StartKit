import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AuthHttp, AuthConfig, tokenNotExpired, AUTH_PROVIDERS} from 'angular2-jwt';

import {AuthService} from '../../services/AuthService'



@Component({
    selector: 'protected',
    template: '',
    directives: [ROUTER_DIRECTIVES],
    providers: [AUTH_PROVIDERS]
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