import {Component, OnInit, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from "angular2/router";
import {DashboardComponent} from "../app/DashboardComponent";
import {ApartmentService} from "./ApartmentService";
import {SharedService} from "../../services/SharedService";
import {UploadService} from "../../services/UploadService";


@Component({
    selector: 'aptcontent',
    template: ` <h1>Content Page</h1>
     <a [routerLink]="['AptDetails']">Back button not working properly</a>
     <div class="mdl-grid demo-content">
          <div class="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
            
          </div>
          <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
          
          <div> <input type="file" (change)="fileChangeEvent($event)" placeholder="Upload file..."></div>
                     
          </div>
          <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">Documents</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="upload()">Upload Docs</a>
                <a class="mdl-button mdl-js-button mdl-js-ripple-effect">View All Docs</a>
              </div>
            </div>
            <div class="demo-separator mdl-cell--1-col"></div>
            <div class="demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
            
            </div>
          </div>
         </div> 
    `,

    directives: [ROUTER_DIRECTIVES],
    providers: [UploadService]
})

export class AptContentComponent implements OnInit {

    data: any;
    filesToUpload: Array<File>;


    constructor(private apartmentService: ApartmentService, private sharedService: SharedService, params: RouteParams, private uploadService: UploadService) {
        this.filesToUpload = [];
    }


    ngOnInit() {}
   
    upload(){
      console.log('upload button clicked');

      this.uploadService.makeFileRequest("http://localhost:3000/upload", [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        console.log(this.filesToUpload);
    }
}