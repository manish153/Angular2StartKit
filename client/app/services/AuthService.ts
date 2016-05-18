import {Injectable} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {tokenNotExpired} from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

constructor(private router: Router) {}


	lock = new Auth0Lock('1mvHGykVHvxzpwstp2wTmrzLrpzouVTm','angular2-auth.auth0.com');

	login() {
   this.lock.show((error: string, profile: Object, id_token: string) => {
     if (error) {
       console.log(error);
       return false;
     }

     localStorage.setItem('profile', JSON.stringify(profile));
     localStorage.setItem('id_token', id_token);
     this.router.navigate(['Dashboard']);
     
    });
 }

 logout() {
   localStorage.removeItem('profile');
   localStorage.removeItem('id_token');
 }

 loggedIn() {
    return tokenNotExpired();
  }

 
}