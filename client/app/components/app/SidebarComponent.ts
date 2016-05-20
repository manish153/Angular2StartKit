import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES,CanActivate} from 'angular2/router';
import {HomeComponent} from '../home/HomeComponent'
import {DashboardComponent} from './DashboardComponent'
import {AuthService} from '../../services/AuthService'


@Component({
    selector: 'app-sidebar',
    template: `
      <header class="demo-drawer-header">
          <img src="../app/assets/images/user.jpg" class="demo-avatar">
          <div class="demo-avatar-dropdown">
            <span>{{user.email}}</span>
            <div class="mdl-layout-spacer"></div>
            <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i class="material-icons" role="presentation">arrow_drop_down</i>
              <span class="visuallyhidden">Accounts</span>
            </button>
            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
              <li class="mdl-menu__item" [routerLink]="['./Profile']">My Profile</li>
              <li class="mdl-menu__item" (click)="logout()">Logout</li>
              
            </ul>
          </div>
        </header>
        <nav class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          
          <a class="mdl-navigation__link" [routerLink]="['./Dashboard']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">dashboard</i>Dashboard</a>
          

          <a class="mdl-navigation__link" [routerLink]="['./Home']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">assignment</i>Tasks</a>

          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Service Requests</a>

          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Payments</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Apartments</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Residents</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">local_offer</i>My Community</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">shopping_cart</i>Purchases</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Social</a>
          <div class="mdl-layout-spacer"></div>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span class="visuallyhidden">Help</span></a>
        </nav>
    `, 

    directives: [ROUTER_DIRECTIVES,DashboardComponent]
})

export class SidebarComponent { 

  user = JSON.parse(localStorage.getItem('profile'));  
  
   
  constructor(private service:AuthService) {
  this.user = this.service.profileUpdated$.subscribe(profile => { 
      this.user = profile;
   });
  }
  

  logout(){  
  //this.user = this.service.profileUpdated$.subscribe(profile => { 
  //this.user = profile})
  this.user = 'user@example.com';
  this.service.logout();
  }
 } 