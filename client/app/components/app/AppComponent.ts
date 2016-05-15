import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthHttp,AuthConfig, tokenNotExpired, AUTH_PROVIDERS} from 'angular2-jwt';


import {HomeComponent} from '../home/HomeComponent'
import {AboutComponent} from '../about/AboutComponent'
import {LoginComponent} from '../login/LoginComponent'
import {AuthService} from '../../services/AuthService'

@RouteConfig([
    {path: 'app/home', component: HomeComponent, as: 'Home'},
    {path: 'app/about', component: AboutComponent, as: 'About'},    
    {path: 'app/login', component: LoginComponent, as: 'Login'},
    {path: 'app/', redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',   
    directives: [ROUTER_DIRECTIVES],
    providers: [AUTH_PROVIDERS,AuthService]
})

export class AppComponent { 

  constructor() {}
  
}