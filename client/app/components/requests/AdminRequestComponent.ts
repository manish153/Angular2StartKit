import {Component,OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {ApartmentService} from "../apartment/ApartmentService";
import {NotificationsService} from 'angular2-notifications';

@Component({
    selector: 'adminrequests',
    template: `
       <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
        <div *ngFor="#request of adminrequests" class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
        
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">{{request.taskname}}</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
               {{request.taskdesc}}
              </div>
              <div class="mdl-card__actions mdl-card--border">
                 <select [(ngModel)]="request.assignedto">
                      <option *ngFor="#assign of dropdownValues" [ngValue]="assign.Email">{{assign.Email}}</option>
                  </select>
                  <a class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="onClickAssign(request)">Assign</a>
              </div>     
        </div>
       </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AdminRequestComponent implements OnInit{

	//isService: boolean = true;
  public adminrequests: Object[];
  public dropdownValues: Object[];
  data: any;
  constructor(private apartmentService: ApartmentService,private _service: NotificationsService) { }
   
  ngOnInit() {
    this.apartmentService.getAdminRequests().subscribe(res => this.adminrequests = res);
    this.apartmentService.getInternalUsersList().subscribe(res => this.dropdownValues = res);
    console.log(JSON.stringify(this.data));       
  }

    onClickAssign(request) {
        this.data = request;  
        this.apartmentService.postConvertToTask(this.data).then(() => {     
        var index = this.adminrequests.findIndex((request) => this.data ==request);
        this.adminrequests.splice(index, 1);
        this._service.success('Task Created', 'Task Created'); 
        });    
    }   
}
