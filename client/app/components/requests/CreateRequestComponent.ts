import {Component,OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES,Router} from "@angular/router-deprecated";
import {MDL} from '../app/MaterialDesignLiteUpgradeElement';
import {FormBuilder, Validators, ControlGroup} from "@angular/common";
import {ApartmentService} from "../apartment/ApartmentService";
import {NotificationsService} from 'angular2-notifications';


@Component({
    selector: 'requests',
    template: `<div mdl class="mdl-grid demo-content">      
          <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                <h3>Create Service Request </h3>

                <form action="#" (ngSubmit)="onSubmit()">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="taskname" [(ngModel)]="data.taskname"/>
                    <label class="mdl-textfield__label" for="taskname">Title</label>                   
                   </div> <br/>
                  <div class="mdl-textfield mdl-js-textfield">
                    <textarea class="mdl-textfield__input" type="text" rows= "5" id="taskdesc" [(ngModel)]="data.taskdesc"></textarea>
                    <label class="mdl-textfield__label" for="taskdesc">Description</label>
                  </div> <br/>
      
                <br/><br/> <button [routerLink]="['../Requests']" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Cancel</button> 
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">Create Service Request</button>

                </form>          
          </div>       

          <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">View All Requests</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                View All Requests 
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a [routerLink]="['../Requests']" class="mdl-button mdl-js-button mdl-js-ripple-effect">View All Requests</a>
              </div>
            </div>           
         </div>
    `,
    directives: [ROUTER_DIRECTIVES, MDL]
    
})

export class CreateRequestComponent implements OnInit {

    data: any;
    constructor(private apartmentService: ApartmentService,private router: Router,private _service: NotificationsService) {
    this.data = {};   
    }

    ngOnInit() {}

    onSubmit(form) {
    this._service.success('Request Created', 'Request Created'); 
    this.apartmentService.postRequests(this.data).then(_=>this.router.navigate(['Requests']));   
    this.data = {};
    }
}
