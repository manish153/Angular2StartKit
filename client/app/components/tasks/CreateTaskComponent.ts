import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {MDL} from '../app/MaterialDesignLiteUpgradeElement';
import {FormBuilder, Validators, ControlGroup} from "angular2/common";
import {ApartmentService} from "../apartment/ApartmentService";


@Component({
    selector: 'tasks',
    template: `<div mdl class="mdl-grid demo-content">
      
          <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                <h3>Create Task Page</h3>   

                <form action="#" (ngSubmit)="onSubmit()">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="taskname" [(ngModel)]="data.taskname"/>
                    <label class="mdl-textfield__label" for="taskname">Task Name</label>
                    <span class="mdl-textfield__error">Only alphabet and no spaces, please!</span>
                   </div> <br/>
                  <div class="mdl-textfield mdl-js-textfield">
                    <textarea class="mdl-textfield__input" type="text" rows= "5" id="taskdesc" [(ngModel)]="data.taskdesc"></textarea>
                    <label class="mdl-textfield__label" for="taskdesc">Task Description</label>
                  </div> <br/>
                  <select (change)="onSelect($event.target.value)">
                      <option *ngFor="#taskstatus of dropdownValues" [value]="taskstatus.value">{{taskstatus.name}}</option>
                  </select>
      
                <br/>  <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">Create Task</button>
                </form>
          </div>
          <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">View Tasks</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                View Existing Tasks  
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a [routerLink]="['../Tasks']" class="mdl-button mdl-js-button mdl-js-ripple-effect">View All Tasks</a>
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
    directives: [ROUTER_DIRECTIVES, MDL]
})

export class CreateTaskComponent {

    data: any;
    public dropdownValues: Taskstatus[] = [
         {"name":"OPEN","value":"OPEN"},
         {"name":"CLOSED","value":"CLOSED"}
    ];

    constructor(private apartmentService: ApartmentService) {
    this.data = {};
    }

    onSubmit(form) {
    console.log(this.data.taskname);
    console.log(JSON.stringify(this.data));
    this.apartmentService.postTasks(this.data);
    this.data = {};
    }

    public selectedStatus: Taskstatus = this.dropdownValues[0];
   
    onSelect(taskevent) { 
        this.selectedStatus = null;
        for (var i = 0; i < this.dropdownValues.length; i++)
        {
          if (this.dropdownValues[i].value == taskevent) {
            this.selectedStatus = this.dropdownValues[i];
            console.log(this.selectedStatus.value);
          }
        }
    }
}

class Taskstatus{
  name: string;
  value: string;
}