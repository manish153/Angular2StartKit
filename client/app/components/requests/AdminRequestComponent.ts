import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";

@Component({
    selector: 'adminrequests',
    styleUrls: ['../app/assets/app.css'],
    template: `
       <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">Admin Service Requests</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
               Admin Service Request from Residents 
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-js-button mdl-js-ripple-effect">???</a>
              </div>
            </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AdminRequestComponent {

	//isService: boolean = true;
    constructor() { }
   
    

}
