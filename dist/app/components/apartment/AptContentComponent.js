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
                constructor(apartmentService, sharedService, params, uploadService, http, router) {
                    this.apartmentService = apartmentService;
                    this.sharedService = sharedService;
                    this.uploadService = uploadService;
                    this.http = http;
                    this.router = router;
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
                    console.log('submit button ' + this.data._id);
                    this.apartmentService.editApt(this.data).then(_ => this.router.navigate(['Apartment']));
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
               <label  *ngIf="isEdit" (click)="isEdit=true">APT ID: {{data.aptID}} </label> <br/>
               <label  *ngIf="!isEdit" (click)="isEdit=true">Apt Type: {{data.aptType}} </label> <br/>
               <label  *ngIf="isEdit" (click)="isEdit=true">Apt Type: {{data.aptType}} </label> <br/>
               <label  *ngIf="!isEdit" (click)="isEdit=true">Business Unit: {{data.BusinessUnit}} </label> <br/>
               <label  *ngIf="isEdit" (click)="isEdit=true">Business Unit: {{data.BusinessUnit}} </label> <br/>
               <label  *ngIf="!isEdit" (click)="isEdit=true">Last Payment Date: {{data.lastPaymentDate}} </label> <br/>
               <label  *ngIf="isEdit" (click)="isEdit=true">Last Payment Date: {{data.lastPaymentDate}} </label> <br/>               
               <label  *ngIf="!isEdit" (click)="isEdit=true">Next Payment Date: {{data.nextPaymentDate}} </label> <br/>
               <label  *ngIf="isEdit" (click)="isEdit=true">Next Payment Date: {{data.nextPaymentDate}} </label> <br/>               
               <label  *ngIf="!isEdit" (click)="isEdit=true">Payment Method: {{data.paymentMethod}} </label> <br/>
               <label  *ngIf="isEdit" (click)="isEdit=true">Payment Method: {{data.paymentMethod}} </label> <br/>               
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
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, SharedService_1.SharedService, router_deprecated_1.RouteParams, UploadService_1.UploadService, http_1.Http, router_deprecated_1.Router])
            ], AptContentComponent);
            exports_1("AptContentComponent", AptContentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcHRDb250ZW50Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkdBO2dCQU9JLFlBQW9CLGdCQUFrQyxFQUFVLGFBQTRCLEVBQUUsTUFBbUIsRUFBVSxhQUE0QixFQUFVLElBQVUsRUFBUyxNQUFjO29CQUE5SyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO29CQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO29CQUErQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBRmxNLFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBR3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDckIsQ0FBQztnQkFFRCxRQUFRO29CQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7b0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDdkYsQ0FBQztnQkFFRCxNQUFNO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztvQkFDcEMsOEhBQThIO29CQUM5SCxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO3dCQUM3RixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUN6RixDQUFDLEVBQUUsQ0FBQyxLQUFLO3dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsYUFBYSxDQUFDLENBQUM7b0JBQ1gsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEIsK0RBQStEO29CQUMvRCxxREFBcUQ7b0JBQ3JELHdEQUF3RDtvQkFFeEQsSUFBSSxHQUFHLEdBQUcsMENBQTBDLFFBQVEsRUFBRSxDQUFDO29CQUMvRCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzNCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO29CQUV6QixHQUFHLENBQUMsa0JBQWtCLEdBQUc7d0JBQ3RCLG1FQUFtRTt3QkFDbkUsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDOzRCQUNqRCxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUMzQixDQUFDO29CQUNMLENBQUMsQ0FBQztvQkFDRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2YsQ0FBQztnQkFFRCxlQUFlLENBQUMsU0FBYztvQkFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBaUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELFFBQVE7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV4RixDQUFDO1lBQ0wsQ0FBQztZQS9KRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTBGVDtvQkFFRCxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztvQkFDL0IsU0FBUyxFQUFFLENBQUMsNkJBQWEsQ0FBQztpQkFDN0IsQ0FBQzs7bUNBQUE7WUFFRixxREE2REMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcGFydG1lbnQvQXB0Q29udGVudENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlUGFyYW1zLFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkXCI7XHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBwL0Rhc2hib2FyZENvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuL0FwYXJ0bWVudFNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaGFyZWRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvU2hhcmVkU2VydmljZVwiO1xyXG5pbXBvcnQge1VwbG9hZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9VcGxvYWRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7RG93bmxvYWRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvRG93bmxvYWRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5kZWNsYXJlIHZhciBzYXZlQXM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHRjb250ZW50JyxcclxuICAgIHRlbXBsYXRlOiBgIDxoMT5Db250ZW50IFBhZ2U8L2gxPlxyXG4gICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnQXB0RGV0YWlscyddXCI+QmFjayBidXR0b24gbm90IHdvcmtpbmcgcHJvcGVybHk8L2E+XHJcbiAgICAgPGRpdiBjbGFzcz1cIm1kbC1ncmlkIGRlbW8tY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tY2hhcnRzIG1kbC1jb2xvci0td2hpdGUgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLWdyYXBocyBtZGwtc2hhZG93LS0yZHAgbWRsLWNvbG9yLS13aGl0ZSBtZGwtY2VsbCBtZGwtY2VsbC0tOC1jb2xcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+ICAgICAgICBcclxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkXCI+XHJcblxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPkFQVCBJRDoge3tkYXRhLmFwdElEfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPkFQVCBJRDoge3tkYXRhLmFwdElEfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5BcHQgVHlwZToge3tkYXRhLmFwdFR5cGV9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+QXB0IFR5cGU6IHt7ZGF0YS5hcHRUeXBlfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5CdXNpbmVzcyBVbml0OiB7e2RhdGEuQnVzaW5lc3NVbml0fX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPkJ1c2luZXNzIFVuaXQ6IHt7ZGF0YS5CdXNpbmVzc1VuaXR9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPkxhc3QgUGF5bWVudCBEYXRlOiB7e2RhdGEubGFzdFBheW1lbnREYXRlfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPkxhc3QgUGF5bWVudCBEYXRlOiB7e2RhdGEubGFzdFBheW1lbnREYXRlfX0gPC9sYWJlbD4gPGJyLz4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5OZXh0IFBheW1lbnQgRGF0ZToge3tkYXRhLm5leHRQYXltZW50RGF0ZX19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5OZXh0IFBheW1lbnQgRGF0ZToge3tkYXRhLm5leHRQYXltZW50RGF0ZX19IDwvbGFiZWw+IDxici8+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+UGF5bWVudCBNZXRob2Q6IHt7ZGF0YS5wYXltZW50TWV0aG9kfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPlBheW1lbnQgTWV0aG9kOiB7e2RhdGEucGF5bWVudE1ldGhvZH19IDwvbGFiZWw+IDxici8+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+QXB0IERlc2NyaXB0aW9uOiB7e2RhdGEuYXB0RGVzY319IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5BcHQgRGVzY3JpcHRpb246IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEuYXB0RGVzY1wiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPkFwdCBBZGRyZXNzOiB7e2RhdGEuYXB0QWRkcmVzc319IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5BcHQgQWRkcmVzczogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5hcHRBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+U3RhdHVzOiB7e2RhdGEuYXB0U3RhdHVzfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPlN0YXR1czogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5hcHRTdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5MZWFzZSBFbmQgRGF0ZToge3tkYXRhLmxlYXNlU3RhcnREYXRlfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPkxlYXNlIEVuZCBEYXRlOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLmxlYXNlU3RhcnREYXRlXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+TGVhc2UgRW5kIERhdGU6IHt7ZGF0YS5sZWFzZUVuZERhdGV9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+TGVhc2UgRW5kIERhdGU6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEubGVhc2VFbmREYXRlXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+UHJpbWFyeSBGaXJzdCBOYW1lOiB7e2RhdGEucmVzaWRlbnRGaXJzdE5hbWV9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+UHJpbWFyeSBGaXJzdCBOYW1lOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLnJlc2lkZW50Rmlyc3ROYW1lXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+IFByaW1hcnkgTGFzdCBOYW1lOiB7e2RhdGEucmVzaWRlbnRMYXN0TmFtZX19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5QcmltYXJ5IExhc3QgTmFtZTogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5yZXNpZGVudExhc3ROYW1lXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+UHJpbWFyeSBFbWFpbDoge3tkYXRhLnJlc2lkZW50RW1haWx9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+UHJpbWFyeSBFbWFpbDogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5yZXNpZGVudEVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+RGF0ZSBvZiBCaXJ0aDoge3tkYXRhLnJlc2lkZW50RE9CfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPkRhdGUgb2YgQmlydGg6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEucmVzaWRlbnRET0JcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5TZWNvbmRhcnkgRmlyc3QgTmFtZToge3tkYXRhLnNlY29uZGFyeVJlc2lkZW50Rmlyc3ROYW1lfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPlNlY29uZGFyeSBGaXJzdCBOYW1lOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLnNlY29uZGFyeVJlc2lkZW50Rmlyc3ROYW1lXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+U2Vjb25kYXJ5IExhc3QgTmFtZToge3tkYXRhLnNlY29uZGFyeVJlc2lkZW50TGFzdE5hbWV9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+U2Vjb25kYXJ5IExhc3QgTmFtZTogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5zZWNvbmRhcnlSZXNpZGVudExhc3ROYW1lXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+U2Vjb25kYXJ5IEVtYWlsOiB7e2RhdGEuc2Vjb25kYXJ5UmVzaWRlbnRFbWFpbH19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5TZWNvbmRhcnkgRW1haWw6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEuc2Vjb25kYXJ5UmVzaWRlbnRFbWFpbFwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPlNlY29uZGFyeSBET0I6IHt7ZGF0YS5zZWNvbmRhcnlSZXNpZGVudERPQn19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5TZWNvbmRhcnkgRE9COiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLnNlY29uZGFyeVJlc2lkZW50RE9CXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+UmVudCAkOiB7e2RhdGEucmVudEFtb3VudH19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5SZW50ICQ6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEucmVudEFtb3VudFwiPlxyXG4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gPGJyLz48YnIvPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD1mYWxzZVwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZCBtZGwtYnV0dG9uLS1jb2xvcmVkXCIgbmFtZT1cImNhbmNlbFwiPmNhbmNlbDwvYnV0dG9uPiAgICBcclxuICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNFZGl0XCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1idXR0b24tLWNvbG9yZWRcIiBuYW1lPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiPnN1Ym1pdDwvYnV0dG9uPiAgICBcclxuICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZS4uLlwiPjwvZGl2PiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1jYXJkcyBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTgtY29sLXRhYmxldCBtZGwtZ3JpZCBtZGwtZ3JpZC0tbm8tc3BhY2luZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby11cGRhdGVzIG1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTQtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlIG1kbC1jYXJkLS1leHBhbmQgbWRsLWNvbG9yLS10ZWFsLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj5Eb2N1bWVudHM8L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIgKGNsaWNrKT1cInVwbG9hZCgpXCI+VXBsb2FkIERvY3M8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlZpZXcgQWxsIEZpbGVzPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tc2VwYXJhdG9yIG1kbC1jZWxsLS0xLWNvbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1vcHRpb25zIG1kbC1jYXJkIG1kbC1jb2xvci0tZGVlcC1wdXJwbGUtNTAwIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTMtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNTBcIj5cclxuICAgICAgICAgICAgICAgPGgzPlJlY2VudGx5IFVwbG9hZGVkIEZpbGVzPC9oMz5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZFwiICpuZ0Zvcj1cIiNmIG9mIGZpbGVzZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPiBcclxuICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJkb3dubG9hZEZpbGUyKGYpXCI+e3tmLm9yaWdpbmFsbmFtZX19IDwvYT4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPC9saT4gXHJcbiAgICAgICAgICAgICAgICA8L3VsPiAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PiBcclxuICAgIGAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW1VwbG9hZFNlcnZpY2VdICAgICAgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXB0Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgZGF0YTogYW55O1xyXG4gICAgZmlsZXNkYXRhOiBhbnk7XHJcbiAgICBmaWxlc1RvVXBsb2FkOiBBcnJheTxGaWxlPjtcclxuICAgIGlzRWRpdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBhcnRtZW50U2VydmljZTogQXBhcnRtZW50U2VydmljZSwgcHJpdmF0ZSBzaGFyZWRTZXJ2aWNlOiBTaGFyZWRTZXJ2aWNlLCBwYXJhbXM6IFJvdXRlUGFyYW1zLCBwcml2YXRlIHVwbG9hZFNlcnZpY2U6IFVwbG9hZFNlcnZpY2UsIHByaXZhdGUgaHR0cDogSHR0cCxwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5maWxlc1RvVXBsb2FkID0gW107XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgdGhpcy5kYXRhID0gdGhpcy5zaGFyZWRTZXJ2aWNlLnRlbXA7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5faWQpO1xyXG4gICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0RmlsZXModGhpcy5kYXRhLl9pZCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmZpbGVzZGF0YSA9IHJlcyk7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgdXBsb2FkKCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWQgYnV0dG9uIGNsaWNrZWQnKTsgICAgICBcclxuICAgICAgIC8vdGhpcy51cGxvYWRTZXJ2aWNlLm1ha2VGaWxlUmVxdWVzdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91cGxvYWRzXCIsIFtdLCB0aGlzLmZpbGVzVG9VcGxvYWQsdGhpcy5kYXRhLl9pZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICB0aGlzLnVwbG9hZFNlcnZpY2UubWFrZUZpbGVSZXF1ZXN0KFwiL3MzdXBsb2FkXCIsIFtdLCB0aGlzLmZpbGVzVG9VcGxvYWQsdGhpcy5kYXRhLl9pZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7ICBcclxuICAgICAgICAgICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLmdldEZpbGVzKHRoaXMuZGF0YS5faWQpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5maWxlc2RhdGEgPSByZXMpOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkRmlsZTIoZil7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgIFxyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IGYub3JpZ2luYWxuYW1lOyAgXHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsZW5hbWUpOyAgIFxyXG4gICAgICAgIC8vbGV0IG1lZGlhdHlwZSA9IFsnYXBwbGljYXRpb24vcGRmJywnaW1hZ2UvcG5nJywnaW1hZ2UvanBlZyddO1xyXG4gICAgICAgIC8vbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXBsb2Fkcy90ZXN0LnBkZic7XHJcbiAgICAgICAgLy9sZXQgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91cGxvYWRzLyR7ZmlsZW5hbWV9YDtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdXJsID0gYGh0dHBzOi8vYW5ndWxhcjJmaWxlcy5zMy5hbWF6b25hd3MuY29tLyR7ZmlsZW5hbWV9YDtcclxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xyXG5cclxuICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiB3ZSBnZXQgYW4gSFRUUCBzdGF0dXMgT0sgKDIwMCksIHNhdmUgdGhlIGZpbGUgdXNpbmcgZmlsZVNhdmVyXHJcbiAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbdGhpcy5yZXNwb25zZV0sIHt0eXBlOiAnJ30pO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUFzKGJsb2IsIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxlQ2hhbmdlRXZlbnQoZmlsZUlucHV0OiBhbnkpe1xyXG4gICAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IDxBcnJheTxGaWxlPj4gZmlsZUlucHV0LnRhcmdldC5maWxlcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzVG9VcGxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXQgYnV0dG9uICcgKyB0aGlzLmRhdGEuX2lkKVxyXG4gICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZWRpdEFwdCh0aGlzLmRhdGEpLnRoZW4oXz0+dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydBcGFydG1lbnQnXSkpO1xyXG4gICAgICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
