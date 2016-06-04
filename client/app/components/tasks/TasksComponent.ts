import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from "angular2/router";
import {MDL} from '../app/MaterialDesignLiteUpgradeElement';
import {ApartmentService} from "../apartment/ApartmentService";
import {SharedService} from "../../services/SharedService";

@Component({
    selector: 'tasks',
    styleUrls: ['../app/assets/app.css'],
    template: `<div mdl class="mdl-grid demo-content">
      
          <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                <h3>Tasks Page</h3>

              <div *ngFor="#task of tasks" class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
                <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">{{task.taskname}}</h2>
                </div>
                <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                {{task.taskdesc}}
                </div>
                <div class="mdl-card__actions mdl-card--border">                
                <a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{task.assignedto}}</a>
                
                               
                <a *ngIf="task.taskstatus=='OPEN'" class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="onClickMark(task)">Mark Completed</a>
                <a [routerLink]="['/Tasks']" *ngIf="task.taskstatus=='CLOSED'" class="mdl-button mdl-js-button mdl-js-ripple-effect">Completed</a>
                <a [routerLink]="['/EditTask']" class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="onClick1(task)">EDIT</a>               
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
                <a [routerLink]="['../CreateTask']" class="mdl-button mdl-js-button mdl-js-ripple-effect">Create</a>
                <a [routerLink]="['../AllTasks']" class="mdl-button mdl-js-button mdl-js-ripple-effect">View All Tasks</a>
              </div>
            </div>
            <div class="demo-separator mdl-cell--1-col"></div>
            <div class="demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__supporting-text mdl-color-text--blue-grey-50">
                <h3>View options</h3>
                <ul>
                  <li>
                    <label for="chkbox1" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox1" class="mdl-checkbox__input">
                      <span class="mdl-checkbox__label">Click per object</span>
                    </label>
                  </li>
                  <li>
                    <label for="chkbox2" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox2" class="mdl-checkbox__input">
                      <span class="mdl-checkbox__label">Views per object</span>
                    </label>
                  </li>
                  <li>
                    <label for="chkbox3" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox3" class="mdl-checkbox__input">
                      <span class="mdl-checkbox__label">Objects selected</span>
                    </label>
                  </li>
                  <li>
                    <label for="chkbox4" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox4" class="mdl-checkbox__input">
                      <span class="mdl-checkbox__label">Objects viewed</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50">Change location</a>
                <div class="mdl-layout-spacer"></div>
                <i class="material-icons">location_on</i>
              </div>
            </div>
          </div>
         </div>
    `,
    directives: [ROUTER_DIRECTIVES,MDL]
    /*,providers: [TaskService]*/
})

export class TasksComponent implements OnInit {

    public tasks: Object[];
    data: any;
    userEmail = JSON.parse(localStorage.getItem('profile'));
    constructor(private apartmentService: ApartmentService, private sharedService: SharedService,private router: Router) { }

    ngOnInit() {
    console.log(this.userEmail.email);  
    this.apartmentService.getMyTask(this.userEmail.email).subscribe(res => this.tasks = res);

    console.log('onInit' +this.tasks);
    }

    onClick1(task){
      this.sharedService.temp = task;
      console.log('value in the shared service ' + JSON.stringify(this.sharedService.temp))
    }

    onClickMark(task){
       this.data  = task;
      //this.apartmentService.markCompleted(this.data).then(_=>this.router.navigate(['AllTasks']));    
        this.apartmentService.markCompleted(this.data).then(() => {     
        var index = this.tasks.findIndex((task) => this.data ==task);
        this.tasks.splice(index, 1);
        });
    }
}