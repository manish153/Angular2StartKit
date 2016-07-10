System.register(['@angular/core', "@angular/router-deprecated", "./ApartmentService", "../../services/SharedService", "../../services/UploadService", '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, ApartmentService_1, SharedService_1, UploadService_1, http_1;
    var AptContentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (ApartmentService_1_1) {
                ApartmentService_1 = ApartmentService_1_1;
            },
            function (SharedService_1_1) {
                SharedService_1 = SharedService_1_1;
            },
            function (UploadService_1_1) {
                UploadService_1 = UploadService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let AptContentComponent = class AptContentComponent {
                constructor(apartmentService, sharedService, params, uploadService, http) {
                    this.apartmentService = apartmentService;
                    this.sharedService = sharedService;
                    this.uploadService = uploadService;
                    this.http = http;
                    this.isEdit = false;
                    this.filesToUpload = [];
                    this.http = http;
                }
                ngOnInit() {
                    this.data = this.sharedService.temp;
                    console.log(this.data._id);
                    this.apartmentService.getFiles(this.data._id).subscribe(res => this.filesdata = res);
                }
                upload() {
                    console.log('upload button clicked');
                    //this.uploadService.makeFileRequest("http://localhost:3000/uploads", [], this.filesToUpload,this.data._id).then((result) => {
                    this.uploadService.makeFileRequest("/s3upload", [], this.filesToUpload, this.data._id).then((result) => {
                        console.log(result);
                        this.apartmentService.getFiles(this.data._id).subscribe(res => this.filesdata = res);
                    }, (error) => {
                        console.error(error);
                    });
                }
                downloadFile2(f) {
                    let xhr = new XMLHttpRequest();
                    let filename = f.originalname;
                    console.log(filename);
                    //let mediatype = ['application/pdf','image/png','image/jpeg'];
                    //let url = 'http://localhost:3000/uploads/test.pdf';
                    //let url = `http://localhost:3000/uploads/${filename}`;
                    let url = `https://angular2files.s3.amazonaws.com/${filename}`;
                    xhr.open('GET', url, true);
                    xhr.responseType = 'blob';
                    xhr.onreadystatechange = function () {
                        // If we get an HTTP status OK (200), save the file using fileSaver
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            var blob = new Blob([this.response], { type: '' });
                            saveAs(blob, filename);
                        }
                    };
                    xhr.send();
                }
                fileChangeEvent(fileInput) {
                    this.filesToUpload = fileInput.target.files;
                    console.log(this.filesToUpload);
                }
                onSubmit() {
                    console.log('submit button');
                }
            };
            AptContentComponent = __decorate([
                core_1.Component({
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
                       
              <div><input type="file" (change)="fileChangeEvent($event)" placeholder="Upload file..."></div>                

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
                <a class="mdl-button mdl-js-button mdl-js-ripple-effect">View All Files</a>
              </div>
            </div>
            <div class="demo-separator mdl-cell--1-col"></div>
            <div class="demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
             <div class="mdl-card__supporting-text mdl-color-text--blue-grey-50">
               <h3>Recently Uploaded Files</h3>
               <div class="mdl-textfield mdl-js-textfield" *ngFor="#f of filesdata">
                <ul> 
                 <li>
                  <a (click)="downloadFile2(f)">{{f.originalname}} </a>                   
                 </li> 
                </ul>  
              </div>
             </div> 
            </div>
          </div>
         </div> 
    `,
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                    providers: [UploadService_1.UploadService]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, SharedService_1.SharedService, router_deprecated_1.RouteParams, UploadService_1.UploadService, http_1.Http])
            ], AptContentComponent);
            exports_1("AptContentComponent", AptContentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcHRDb250ZW50Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNEdBO2dCQU9JLFlBQW9CLGdCQUFrQyxFQUFVLGFBQTRCLEVBQUUsTUFBbUIsRUFBVSxhQUE0QixFQUFVLElBQVU7b0JBQXZKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQStCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO29CQUFVLFNBQUksR0FBSixJQUFJLENBQU07b0JBRjNLLFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBR3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDckIsQ0FBQztnQkFFRCxRQUFRO29CQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7b0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDdkYsQ0FBQztnQkFFRCxNQUFNO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztvQkFDcEMsOEhBQThIO29CQUM5SCxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO3dCQUM3RixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUN6RixDQUFDLEVBQUUsQ0FBQyxLQUFLO3dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsYUFBYSxDQUFDLENBQUM7b0JBQ1gsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEIsK0RBQStEO29CQUMvRCxxREFBcUQ7b0JBQ3JELHdEQUF3RDtvQkFFeEQsSUFBSSxHQUFHLEdBQUcsMENBQTBDLFFBQVEsRUFBRSxDQUFDO29CQUMvRCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzNCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO29CQUV6QixHQUFHLENBQUMsa0JBQWtCLEdBQUc7d0JBQ3RCLG1FQUFtRTt3QkFDbkUsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDOzRCQUNqRCxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUMzQixDQUFDO29CQUNMLENBQUMsQ0FBQztvQkFDRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2YsQ0FBQztnQkFFRCxlQUFlLENBQUMsU0FBYztvQkFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBaUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELFFBQVE7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtnQkFDOUIsQ0FBQztZQUNMLENBQUM7WUE1SkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlGVDtvQkFFRCxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztvQkFDL0IsU0FBUyxFQUFFLENBQUMsNkJBQWEsQ0FBQztpQkFDN0IsQ0FBQzs7bUNBQUE7WUFFRixxREEyREMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcGFydG1lbnQvQXB0Q29udGVudENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuLi9hcHAvRGFzaGJvYXJkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXBhcnRtZW50U2VydmljZX0gZnJvbSBcIi4vQXBhcnRtZW50U2VydmljZVwiO1xyXG5pbXBvcnQge1NoYXJlZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9TaGFyZWRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXBsb2FkU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1VwbG9hZFNlcnZpY2VcIjtcclxuaW1wb3J0IHtEb3dubG9hZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9Eb3dubG9hZFNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmRlY2xhcmUgdmFyIHNhdmVBczogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwdGNvbnRlbnQnLFxyXG4gICAgdGVtcGxhdGU6IGAgPGgxPkNvbnRlbnQgUGFnZTwvaDE+XHJcbiAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydBcHREZXRhaWxzJ11cIj5CYWNrIGJ1dHRvbiBub3Qgd29ya2luZyBwcm9wZXJseTwvYT5cclxuICAgICA8ZGl2IGNsYXNzPVwibWRsLWdyaWQgZGVtby1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1jaGFydHMgbWRsLWNvbG9yLS13aGl0ZSBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tZ3JhcGhzIG1kbC1zaGFkb3ctLTJkcCBtZGwtY29sb3ItLXdoaXRlIG1kbC1jZWxsIG1kbC1jZWxsLS04LWNvbFwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj4gICAgICAgIFxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGRcIj5cclxuXHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+QVBUIElEOiB7e2RhdGEuYXB0SUR9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+QVBUIElEOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImRhdGEuYXB0SURcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5BcHQgVHlwZToge3tkYXRhLmFwdFR5cGV9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+QXB0IFR5cGU6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEuYXB0VHlwZVwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPkJ1c2luZXNzIFVuaXQ6IHt7ZGF0YS5CdXNpbmVzc1VuaXR9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+QnVzaW5lc3MgVW5pdDogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5CdXNpbmVzc1VuaXRcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5BcHQgRGVzY3JpcHRpb246IHt7ZGF0YS5hcHREZXNjfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPkFwdCBEZXNjcmlwdGlvbjogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5hcHREZXNjXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+QXB0IEFkZHJlc3M6IHt7ZGF0YS5hcHRBZGRyZXNzfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPkFwdCBBZGRyZXNzOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLmFwdEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5TdGF0dXM6IHt7ZGF0YS5hcHRTdGF0dXN9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+U3RhdHVzOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLmFwdFN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPkxlYXNlIEVuZCBEYXRlOiB7e2RhdGEubGVhc2VTdGFydERhdGV9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+TGVhc2UgRW5kIERhdGU6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEubGVhc2VTdGFydERhdGVcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5MZWFzZSBFbmQgRGF0ZToge3tkYXRhLmxlYXNlRW5kRGF0ZX19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5MZWFzZSBFbmQgRGF0ZTogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5sZWFzZUVuZERhdGVcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5QcmltYXJ5IEZpcnN0IE5hbWU6IHt7ZGF0YS5yZXNpZGVudEZpcnN0TmFtZX19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5QcmltYXJ5IEZpcnN0IE5hbWU6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEucmVzaWRlbnRGaXJzdE5hbWVcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj4gUHJpbWFyeSBMYXN0IE5hbWU6IHt7ZGF0YS5yZXNpZGVudExhc3ROYW1lfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPlByaW1hcnkgTGFzdCBOYW1lOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLnJlc2lkZW50TGFzdE5hbWVcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5QcmltYXJ5IEVtYWlsOiB7e2RhdGEucmVzaWRlbnRFbWFpbH19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5QcmltYXJ5IEVtYWlsOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLnJlc2lkZW50RW1haWxcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5EYXRlIG9mIEJpcnRoOiB7e2RhdGEucmVzaWRlbnRET0J9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+RGF0ZSBvZiBCaXJ0aDogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5yZXNpZGVudERPQlwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPlNlY29uZGFyeSBGaXJzdCBOYW1lOiB7e2RhdGEuc2Vjb25kYXJ5UmVzaWRlbnRGaXJzdE5hbWV9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+U2Vjb25kYXJ5IEZpcnN0IE5hbWU6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEuc2Vjb25kYXJ5UmVzaWRlbnRGaXJzdE5hbWVcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5TZWNvbmRhcnkgTGFzdCBOYW1lOiB7e2RhdGEuc2Vjb25kYXJ5UmVzaWRlbnRMYXN0TmFtZX19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5TZWNvbmRhcnkgTGFzdCBOYW1lOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLnNlY29uZGFyeVJlc2lkZW50TGFzdE5hbWVcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5TZWNvbmRhcnkgRW1haWw6IHt7ZGF0YS5zZWNvbmRhcnlSZXNpZGVudEVtYWlsfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPlNlY29uZGFyeSBFbWFpbDogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5zZWNvbmRhcnlSZXNpZGVudEVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+U2Vjb25kYXJ5IERPQjoge3tkYXRhLnNlY29uZGFyeVJlc2lkZW50RE9CfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPlNlY29uZGFyeSBET0I6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEuc2Vjb25kYXJ5UmVzaWRlbnRET0JcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5SZW50ICQ6IHt7ZGF0YS5yZW50QW1vdW50fX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPlJlbnQgJDogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5yZW50QW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+TGFzdCBQYXltZW50IERhdGU6IHt7ZGF0YS5sYXN0UGF5bWVudERhdGV9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+TGFzdCBQYXltZW50IERhdGU6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEubGFzdFBheW1lbnREYXRlXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+TmV4dCBQYXltZW50IERhdGU6IHt7ZGF0YS5uZXh0UGF5bWVudERhdGV9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+TmV4dCBQYXltZW50IERhdGU6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEubmV4dFBheW1lbnREYXRlXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+UGF5bWVudCBNZXRob2Q6IHt7ZGF0YS5wYXltZW50TWV0aG9kfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPlBheW1lbnQgTWV0aG9kOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLnBheW1lbnRNZXRob2RcIj5cclxuICAgICAgICAgICAgPC9kaXY+IDxici8+PGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9ZmFsc2VcIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWJ1dHRvbi0tY29sb3JlZFwiIG5hbWU9XCJjYW5jZWxcIj5jYW5jZWw8L2J1dHRvbj4gICAgXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzRWRpdFwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZCBtZGwtYnV0dG9uLS1jb2xvcmVkXCIgbmFtZT1cInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIj5zdWJtaXQ8L2J1dHRvbj4gICAgXHJcbiAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJmaWxlXCIgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlRXZlbnQoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIGZpbGUuLi5cIj48L2Rpdj4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tY2FyZHMgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS04LWNvbC10YWJsZXQgbWRsLWdyaWQgbWRsLWdyaWQtLW5vLXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kIG1kbC1jb2xvci0tdGVhbC0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+RG9jdW1lbnRzPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiIChjbGljayk9XCJ1cGxvYWQoKVwiPlVwbG9hZCBEb2NzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5WaWV3IEFsbCBGaWxlczwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLXNlcGFyYXRvciBtZGwtY2VsbC0tMS1jb2xcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tb3B0aW9ucyBtZGwtY2FyZCBtZGwtY29sb3ItLWRlZXAtcHVycGxlLTUwMCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS0zLWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTUwXCI+XHJcbiAgICAgICAgICAgICAgIDxoMz5SZWNlbnRseSBVcGxvYWRlZCBGaWxlczwvaDM+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGRcIiAqbmdGb3I9XCIjZiBvZiBmaWxlc2RhdGFcIj5cclxuICAgICAgICAgICAgICAgIDx1bD4gXHJcbiAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwiZG93bmxvYWRGaWxlMihmKVwiPnt7Zi5vcmlnaW5hbG5hbWV9fSA8L2E+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgPC91bD4gIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj4gXHJcbiAgICBgLFxyXG5cclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtVcGxvYWRTZXJ2aWNlXSAgICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwdENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGRhdGE6IGFueTtcclxuICAgIGZpbGVzZGF0YTogYW55O1xyXG4gICAgZmlsZXNUb1VwbG9hZDogQXJyYXk8RmlsZT47XHJcbiAgICBpc0VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6IEFwYXJ0bWVudFNlcnZpY2UsIHByaXZhdGUgc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZSwgcGFyYW1zOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSB1cGxvYWRTZXJ2aWNlOiBVcGxvYWRTZXJ2aWNlLCBwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSBbXTtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLnNoYXJlZFNlcnZpY2UudGVtcDtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLl9pZCk7XHJcbiAgICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRGaWxlcyh0aGlzLmRhdGEuX2lkKS5zdWJzY3JpYmUocmVzID0+IHRoaXMuZmlsZXNkYXRhID0gcmVzKTtcclxuICAgIH1cclxuICAgXHJcbiAgICB1cGxvYWQoKXtcclxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZCBidXR0b24gY2xpY2tlZCcpOyAgICAgIFxyXG4gICAgICAgLy90aGlzLnVwbG9hZFNlcnZpY2UubWFrZUZpbGVSZXF1ZXN0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3VwbG9hZHNcIiwgW10sIHRoaXMuZmlsZXNUb1VwbG9hZCx0aGlzLmRhdGEuX2lkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgIHRoaXMudXBsb2FkU2VydmljZS5tYWtlRmlsZVJlcXVlc3QoXCIvczN1cGxvYWRcIiwgW10sIHRoaXMuZmlsZXNUb1VwbG9hZCx0aGlzLmRhdGEuX2lkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTsgIFxyXG4gICAgICAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0RmlsZXModGhpcy5kYXRhLl9pZCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmZpbGVzZGF0YSA9IHJlcyk7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlMihmKXtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7ICAgXHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZi5vcmlnaW5hbG5hbWU7ICBcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlbmFtZSk7ICAgXHJcbiAgICAgICAgLy9sZXQgbWVkaWF0eXBlID0gWydhcHBsaWNhdGlvbi9wZGYnLCdpbWFnZS9wbmcnLCdpbWFnZS9qcGVnJ107XHJcbiAgICAgICAgLy9sZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91cGxvYWRzL3Rlc3QucGRmJztcclxuICAgICAgICAvL2xldCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL3VwbG9hZHMvJHtmaWxlbmFtZX1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hbmd1bGFyMmZpbGVzLnMzLmFtYXpvbmF3cy5jb20vJHtmaWxlbmFtZX1gO1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XHJcblxyXG4gICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIElmIHdlIGdldCBhbiBIVFRQIHN0YXR1cyBPSyAoMjAwKSwgc2F2ZSB0aGUgZmlsZSB1c2luZyBmaWxlU2F2ZXJcclxuICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFt0aGlzLnJlc3BvbnNlXSwge3R5cGU6ICcnfSk7XHJcbiAgICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGVDaGFuZ2VFdmVudChmaWxlSW5wdXQ6IGFueSl7XHJcbiAgICAgICAgdGhpcy5maWxlc1RvVXBsb2FkID0gPEFycmF5PEZpbGU+PiBmaWxlSW5wdXQudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNUb1VwbG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKXtcclxuICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdCBidXR0b24nKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
