import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import {AuthHttp, AuthConfig, tokenNotExpired, AUTH_PROVIDERS} from 'angular2-jwt';


import {HomeComponent} from '../home/HomeComponent'
import {AboutComponent} from '../about/AboutComponent'
import {HeaderComponent} from './HeaderComponent'
import {LoginComponent} from '../login/LoginComponent'
import {AuthService} from '../../services/AuthService'
import {SidebarComponent} from './SidebarComponent'
import {DashboardComponent} from './DashboardComponent'
import {MDL} from './MaterialDesignLiteUpgradeElement'
import {AuthRouterOutlet} from './AuthRouterOutlet'
import {ProfileComponent} from '../profile/ProfileComponent'
import {ApartmentComponent} from '../apartment/ApartmentComponent'
import {RequestsComponent} from '../requests/RequestsComponent'
import {TasksComponent} from '../tasks/TasksComponent'
import {PaymentsComponent} from '../payments/PaymentsComponent'
import {ResidentsComponent} from '../residents/ResidentsComponent'
import {CommunityComponent} from '../community/CommunityComponent'
import {BusinessRootComponent} from '../apartment/BusinessRootComponent'
import {CreateTaskComponent} from '../tasks/CreateTaskComponent'


@RouteConfig([
    { path: 'app/home', component: HomeComponent, as: 'Home' },
    { path: 'app/dashboard', component: DashboardComponent, as: 'Dashboard', useAsDefault: true},
    { path: 'app/about', component: AboutComponent, as: 'About' },
    { path: 'app/login', component: LoginComponent, as: 'Login' },
    { path: 'app/profile', component: ProfileComponent, as: 'Profile' },
    //{ path: 'app/apartment', component: ApartmentComponent, as: 'Apartment' },
    { path: 'app/requests', component: RequestsComponent, as: 'Requests' },
    { path: 'app/tasks', component: TasksComponent, as: 'Tasks' },
    { path: 'app/createtask', component: CreateTaskComponent, as: 'CreateTask' },
    { path: 'app/payment', component: PaymentsComponent, as: 'Payments' },
    { path: 'app/residents', component: ResidentsComponent, as: 'Residents' },
    { path: 'app/community', component: CommunityComponent, as: 'Community' },
    { path: 'app/businessunits/...', component: BusinessRootComponent, as: 'BusinessRoots' },
    { path: 'app/**', redirectTo: ['Dashboard'] }
])
@Component({
    selector: 'my-app',
    /*template: '<router-outlet></router-outlet>',*/
  template: `
    <body>
    <div mdl class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
      <app-header mdl class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600"></app-header>
      <app-sidebar class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
      </app-sidebar>
      <main class="mdl-layout__content mdl-color--grey-100">
         
         <auth-router-outlet></auth-router-outlet>

         
      </main>
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="position: fixed; left: -1000px; height: -1000px;">
        <defs>
          <mask id="piemask" maskContentUnits="objectBoundingBox">
            <circle cx=0.5 cy=0.5 r=0.49 fill="white" />
            <circle cx=0.5 cy=0.5 r=0.40 fill="black" />
          </mask>
          <g id="piechart">
            <circle cx=0.5 cy=0.5 r=0.5 />
            <path d="M 0.5 0.5 0.5 0 A 0.5 0.5 0 0 1 0.95 0.28 z" stroke="none" fill="rgba(255, 255, 255, 0.75)" />
          </g>
        </defs>
      </svg>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 250" style="position: fixed; left: -1000px; height: -1000px;">
        <defs>
          <g id="chart">
            <g id="Gridlines">
              <line fill="#888888" stroke="#888888" stroke-miterlimit="10" x1="0" y1="27.3" x2="468.3" y2="27.3" />
              <line fill="#888888" stroke="#888888" stroke-miterlimit="10" x1="0" y1="66.7" x2="468.3" y2="66.7" />
              <line fill="#888888" stroke="#888888" stroke-miterlimit="10" x1="0" y1="105.3" x2="468.3" y2="105.3" />
              <line fill="#888888" stroke="#888888" stroke-miterlimit="10" x1="0" y1="144.7" x2="468.3" y2="144.7" />
              <line fill="#888888" stroke="#888888" stroke-miterlimit="10" x1="0" y1="184.3" x2="468.3" y2="184.3" />
            </g>
            <g id="Numbers">
              <text transform="matrix(1 0 0 1 485 29.3333)" fill="#888888" font-family="'Roboto'" font-size="9">500</text>
              <text transform="matrix(1 0 0 1 485 69)" fill="#888888" font-family="'Roboto'" font-size="9">400</text>
              <text transform="matrix(1 0 0 1 485 109.3333)" fill="#888888" font-family="'Roboto'" font-size="9">300</text>
              <text transform="matrix(1 0 0 1 485 149)" fill="#888888" font-family="'Roboto'" font-size="9">200</text>
              <text transform="matrix(1 0 0 1 485 188.3333)" fill="#888888" font-family="'Roboto'" font-size="9">100</text>
              <text transform="matrix(1 0 0 1 0 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">1</text>
              <text transform="matrix(1 0 0 1 78 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">2</text>
              <text transform="matrix(1 0 0 1 154.6667 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">3</text>
              <text transform="matrix(1 0 0 1 232.1667 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">4</text>
              <text transform="matrix(1 0 0 1 309 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">5</text>
              <text transform="matrix(1 0 0 1 386.6667 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">6</text>
              <text transform="matrix(1 0 0 1 464.3333 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">7</text>
            </g>
            <g id="Layer_5">
              <polygon opacity="0.36" stroke-miterlimit="10" points="0,223.3 48,138.5 154.7,169 211,88.5
              294.5,80.5 380,165.2 437,75.5 469.5,223.3 	"/>
            </g>
            <g id="Layer_4">
              <polygon stroke-miterlimit="10" points="469.3,222.7 1,222.7 48.7,166.7 155.7,188.3 212,132.7
              296.7,128 380.7,184.3 436.7,125 	"/>
            </g>
          </g>
        </defs>
      </svg>
      
    <script src="https://code.getmdl.io/1.1.3/material.min.js"></script>
  </body>

    `,
    directives: [ROUTER_DIRECTIVES, SidebarComponent, HeaderComponent, MDL, AuthRouterOutlet],
    providers: [AUTH_PROVIDERS]
})


export class AppComponent {

  constructor() { }

}