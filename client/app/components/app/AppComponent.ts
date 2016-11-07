import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, CanActivate } from '@angular/router-deprecated';
import {AuthHttp, AuthConfig, tokenNotExpired, AUTH_PROVIDERS} from 'angular2-jwt';
import {SimpleNotificationsComponent,NotificationsService} from 'angular2-notifications';


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
import {AdminRequestComponent} from '../requests/AdminRequestComponent'
import {CreateRequestComponent} from '../requests/CreateRequestComponent'
import {TasksComponent} from '../tasks/TasksComponent'
import {AllTasksComponent} from '../tasks/AllTasksComponent'
import {PaymentsComponent} from '../payments/PaymentsComponent'
import {AdminPaymentsComponent} from '../payments/AdminPaymentsComponent'
import {ResidentsComponent} from '../residents/ResidentsComponent'
import {CommunityComponent} from '../community/CommunityComponent'
import {BusinessRootComponent} from '../apartment/BusinessRootComponent'
import {CreateTaskComponent} from '../tasks/CreateTaskComponent'
import {EditTaskComponent} from '../tasks/EditTaskComponent'
import {AptSearchComponent} from '../apartment/AptSearchComponent'


@RouteConfig([
    { path: 'app/home', component: HomeComponent, name: 'Home' },
    { path: 'app/dashboard', component: DashboardComponent, name: 'Dashboard', useAsDefault: true},
    { path: 'app/about', component: AboutComponent, name: 'About' },
    { path: 'app/login', component: LoginComponent, name: 'Login' },
    { path: 'app/profile', component: ProfileComponent, name: 'Profile' },
    //{ path: 'app/apartment', component: ApartmentComponent, as: 'Apartment' },
    { path: 'app/requests', component: RequestsComponent, name: 'Requests' },
    { path: 'app/adminrequest', component: AdminRequestComponent, name: 'Adminrequest' },
    { path: 'app/createrequest', component: CreateRequestComponent, name: 'Createrequest' },
    { path: 'app/tasks', component: TasksComponent, name: 'Tasks' },
    { path: 'app/alltasks', component: AllTasksComponent, name: 'AllTasks' },
    { path: 'app/createtask', component: CreateTaskComponent, name: 'CreateTask' },
    { path: 'app/edittask', component: EditTaskComponent, name: 'EditTask' },
    { path: 'app/payment', component: PaymentsComponent, name: 'Payments' },
    { path: 'app/adminpayment', component: PaymentsComponent, name: 'AdminPayments' },
    { path: 'app/residents', component: ResidentsComponent, name: 'Residents' },
    { path: 'app/community', component: CommunityComponent, name: 'Community' },
    { path: 'app/apartment', component: AptSearchComponent, name: 'AptSearch' },
    { path: 'app/businessunits/...', component: BusinessRootComponent, name: 'BusinessRoots' },
    { path: 'app/**', redirectTo: ['Dashboard'] }
])
@Component({
    selector: 'my-app',
  template: `
    <body>
    <div mdl class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
      <app-header mdl class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600" [(hideme)] = "temp"></app-header>
      <app-sidebar class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50"  (sidebarClicked)="temp = $event">
      </app-sidebar>
      <main class="mdl-layout__content mdl-color--grey-100">
               
         <auth-router-outlet></auth-router-outlet>
        
      </main>
    </div>
      
    <script src="https://code.getmdl.io/1.1.3/material.min.js"></script>
    <simple-notifications [options]="options"></simple-notifications>  
  </body>
  

    `,
    directives: [ROUTER_DIRECTIVES, SidebarComponent, HeaderComponent, MDL, AuthRouterOutlet,SimpleNotificationsComponent],
    providers: [AUTH_PROVIDERS,NotificationsService]
})


export class AppComponent {

  temp:boolean=false;

  constructor() { }

      public options = {
          timeOut: 5000,
          lastOnBottom: true,
          clickToClose: true,
          maxLength: 0,
          maxStack: 7,
          showProgressBar: true,
          pauseOnHover: true
    };
}