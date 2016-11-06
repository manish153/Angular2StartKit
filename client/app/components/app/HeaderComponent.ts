import {Component,ChangeDetectorRef} from '@angular/core';
import {MDL} from './MaterialDesignLiteUpgradeElement';
import {ApartmentService} from "../apartment/ApartmentService";
import {Router} from "@angular/router-deprecated";
import {SharedService} from "../../services/SharedService"; 
import {AptSearchComponent} from "../apartment/AptSearchComponent";


@Component({
    selector: 'app-header',
    /*template: '<router-outlet></router-outlet>',*/
     directives: [AptSearchComponent],
    template: `
    <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Angular2 Application</span>
          <div class="mdl-layout-spacer"></div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <div class="mdl-textfield__expandable-holder">
              <input class="mdl-textfield__input" type="text" id="search" (keyup.enter)="Search($event)">
              <label class="mdl-textfield__label" for="search">Enter your query...</label>
            </div>
          </div>
          <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
            <i class="material-icons">more_vert</i>
          </button>

          <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
            <li class="mdl-menu__item">About</li>
            <li class="mdl-menu__item">Contact</li>
            <li class="mdl-menu__item">Legal information</li>
          </ul>
        </div>
     <aptsearch *ngIf="apartment" [model]="apartment"></aptsearch>    
    `,
     /*  directives: [ MDL ]*/
})

export class HeaderComponent {

  public apartment: string;
    
     constructor(private apartmentService: ApartmentService,private router: Router,private sharedService: SharedService) { 
       this.apartmentService=apartmentService;
       this.sharedService=sharedService;
     }

     
     Search(event){
       console.log('Search Enter Submitted ' + event.target.value);
       this.apartment = event.target.value;
       this.router.navigate(['AptSearch']);     
      //  this.apartmentService.searchApt2(event.target.value).subscribe(res => {this.sharedService.temp = res 
      //   console.log(this.sharedService.temp)
      //   this.router.navigate(['AptSearch'])});         
     }
}