import {Component, OnInit, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from "angular2/router";
import {DashboardComponent} from "../app/DashboardComponent";
import {ApartmentService} from "./ApartmentService";
import {SharedService} from "../../services/SharedService";
import {UploadService} from "../../services/UploadService";
import {DownloadService} from "../../services/DownloadService";
import {Http} from 'angular2/http';

declare var saveAs: any;

@Component({
    selector: 'aptcontent',
    template: ` <h1>Content Page</h1>
     <a [routerLink]="['AptDetails']">Back button not working properly</a>
     <div class="mdl-grid demo-content">
          <div class="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
            
          </div>
          <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
          
          <form action="#" (ngSubmit)="onSubmit()">        
           <div class="mdl-textfield mdl-js-textfield">

               <label  *ngIf="!isEdit" (click)="isEdit=true">APT ID: {{data.aptID}} </label> <br/>
               <label  *ngIf="isEdit">APT ID: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text" [(ngModel)]="data.aptID">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Apt Type: {{data.aptType}} </label> <br/>
               <label  *ngIf="isEdit">Apt Type: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.aptType">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Business Unit: {{data.BusinessUnit}} </label> <br/>
               <label  *ngIf="isEdit">Business Unit: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.BusinessUnit">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Apt Description: {{data.aptDesc}} </label> <br/>
               <label  *ngIf="isEdit">Apt Description: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.aptDesc">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Apt Address: {{data.aptAddress}} </label> <br/>
               <label  *ngIf="isEdit">Apt Address: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.aptAddress">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Status: {{data.aptStatus}} </label> <br/>
               <label  *ngIf="isEdit">Status: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.aptStatus">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Lease End Date: {{data.leaseStartDate}} </label> <br/>
               <label  *ngIf="isEdit">Lease End Date: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.leaseStartDate">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Lease End Date: {{data.leaseEndDate}} </label> <br/>
               <label  *ngIf="isEdit">Lease End Date: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.leaseEndDate">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Primary First Name: {{data.residentFirstName}} </label> <br/>
               <label  *ngIf="isEdit">Primary First Name: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.residentFirstName">
               <label  *ngIf="!isEdit" (click)="isEdit=true"> Primary Last Name: {{data.residentLastName}} </label> <br/>
               <label  *ngIf="isEdit">Primary Last Name: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.residentLastName">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Primary Email: {{data.residentEmail}} </label> <br/>
               <label  *ngIf="isEdit">Primary Email: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.residentEmail">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Date of Birth: {{data.residentDOB}} </label> <br/>
               <label  *ngIf="isEdit">Date of Birth: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.residentDOB">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Secondary First Name: {{data.secondaryResidentFirstName}} </label> <br/>
               <label  *ngIf="isEdit">Secondary First Name: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.secondaryResidentFirstName">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Secondary Last Name: {{data.secondaryResidentLastName}} </label> <br/>
               <label  *ngIf="isEdit">Secondary Last Name: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.secondaryResidentLastName">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Secondary Email: {{data.secondaryResidentEmail}} </label> <br/>
               <label  *ngIf="isEdit">Secondary Email: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.secondaryResidentEmail">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Secondary DOB: {{data.secondaryResidentDOB}} </label> <br/>
               <label  *ngIf="isEdit">Secondary DOB: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.secondaryResidentDOB">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Rent $: {{data.rentAmount}} </label> <br/>
               <label  *ngIf="isEdit">Rent $: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.rentAmount">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Last Payment Date: {{data.lastPaymentDate}} </label> <br/>
               <label  *ngIf="isEdit">Last Payment Date: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.lastPaymentDate">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Next Payment Date: {{data.nextPaymentDate}} </label> <br/>
               <label  *ngIf="isEdit">Next Payment Date: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.nextPaymentDate">
               <label  *ngIf="!isEdit" (click)="isEdit=true">Payment Method: {{data.paymentMethod}} </label> <br/>
               <label  *ngIf="isEdit">Payment Method: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" type="text"  [(ngModel)]="data.paymentMethod">
            </div> <br/><br/>

              <button *ngIf="isEdit" (click)="isEdit=false" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" name="cancel">cancel</button>    
              <button *ngIf="isEdit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" name="submit" type="submit">submit</button>    
           </form>
         
              <!--<div><label>Internal _id  </label>{{data._id}}</div>-->
              <div><input type="file" (change)="fileChangeEvent($event)" placeholder="Upload file..."></div>                

              <div class="mdl-textfield mdl-js-textfield" *ngFor="#prof of uploadFileName">
                  <label from="name">Name: {{prof.userFirstName}} </label>                   
              </div>
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
                <a class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="downloadFile2()">download</a>
              </div>
            </div>
            <div class="demo-separator mdl-cell--1-col"></div>
            <div class="demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
               <div class="mdl-textfield mdl-js-textfield" *ngFor="#f of filesdata">
                  <a (click)="downloadFile2()">{{f.originalname}} </a>                   
              </div>
            </div>
          </div>
         </div> 
    `,

    directives: [ROUTER_DIRECTIVES],
    providers: [UploadService,DownloadService, { useClass: DownloadService }]      
})

export class AptContentComponent implements OnInit {

    data: any;
    filesdata: any;
    filesToUpload: Array<File>;
    isEdit: boolean = false;
    uploadFileName: any;

    constructor(private apartmentService: ApartmentService, private sharedService: SharedService, params: RouteParams, private uploadService: UploadService, private http: Http) {
        this.filesToUpload = [];
        this.http = http;
    }

    ngOnInit() {
      this.data = this.sharedService.temp;
      console.log(this.data._id);
      this.apartmentService.getFiles(this.data._id).subscribe(res => this.filesdata = res);
      console.log(this.filesdata);
   //   this.apartmentService.getProfile('manish.rao@outlook.com').subscribe(res => this.uploadFileName = res);
    }
   
    upload(){
      console.log('upload button clicked');      
       //this.uploadService.makeFileRequest("http://localhost:3000/uploads", [], this.filesToUpload,this.data._id).then((result) => {
       this.uploadService.makeFileRequest("/s3upload", [], this.filesToUpload,this.data._id).then((result) => {
            console.log(result);  
            this.apartmentService.getFiles(this.data._id).subscribe(res => this.filesdata = res);                       
        }, (error) => {
            console.error(error);
        });
    }

    downloadFile2(){
        let xhr = new XMLHttpRequest();        
        let url = 'http://localhost:3000/uploads/test.pdf';
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';

         xhr.onreadystatechange = function() {            
            // If we get an HTTP status OK (200), save the file using fileSaver
            if(xhr.readyState === 4 && xhr.status === 200) {
                var blob = new Blob([this.response], {type: 'application/pdf'});
                saveAs(blob, 'Report.pdf');
            }
        };
        xhr.send();
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        console.log(this.filesToUpload);
    }

    onSubmit(){
      console.log('submit button')
    }
}