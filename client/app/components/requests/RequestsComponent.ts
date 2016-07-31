import {Component,OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {ApartmentService} from "../apartment/ApartmentService";

@Component({
    selector: 'requests',
    styleUrls: ['../app/assets/app.css'],
    template: `
    <div mdl class="mdl-grid demo-content">
     <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
       <div *ngFor="#request of requests" class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">{{request.taskname}}</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
               {{request.taskdesc}}
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-js-button mdl-js-ripple-effect">???</a>
              </div>
       </div>
     </div>  
          <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">Create New Task</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                Create New Tasks For Team Members 
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a [routerLink]="['../Createrequest']" class="mdl-button mdl-js-button mdl-js-ripple-effect">Create Service Request</a>
                
              </div>
            </div>  
          </div>  
    </div>    

    `,
    directives: [ROUTER_DIRECTIVES]
})

export class RequestsComponent implements OnInit{

	//isService: boolean = true;
    public requests: Object[];
    userEmail = JSON.parse(localStorage.getItem('profile'));
    constructor(private apartmentService: ApartmentService) { }
   
    ngOnInit() {
    this.apartmentService.getMyRequests(this.userEmail.email).subscribe(res => this.requests = res);
    }
    

}
