System.register(['angular2/core', "angular2/router", "./ApartmentService", "../../services/SharedService", "../../services/UploadService", "../../services/DownloadService", 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, router_1, ApartmentService_1, SharedService_1, UploadService_1, DownloadService_1, http_1;
    var AptContentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (DownloadService_1_1) {
                DownloadService_1 = DownloadService_1_1;
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
                }
                upload() {
                    console.log('upload button clicked');
                    this.uploadService.makeFileRequest("http://localhost:3000/uploads", [], this.filesToUpload, this.data._id).then((result) => {
                        console.log(result);
                    }, (error) => {
                        console.error(error);
                    });
                }
                // downloadFile() {
                // this.http.get(
                //   'http://localhost:3000/uploads/test.pdf').subscribe(
                //     (response) => {
                //       var mediaType = 'application/pdf';
                //       var blob = new Blob([response._body], {type: mediaType});
                //       var filename = 'test.pdf';
                //       filesaver.saveAs(blob, filename);
                //     });
                // }
                downloadFile2() {
                    let xhr = new XMLHttpRequest();
                    let url = 'http://localhost:3000/uploads/test.pdf';
                    xhr.open('GET', url, true);
                    xhr.responseType = 'blob';
                    xhr.onreadystatechange = function () {
                        // If we get an HTTP status OK (200), save the file using fileSaver
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            var blob = new Blob([this.response], { type: 'application/pdf' });
                            saveAs(blob, 'Report.pdf');
                        }
                    };
                    // Start the Ajax request
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
         
              <div><label>Internal _id  </label>{{data._id}}</div>
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
                <a class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="downloadFile2()">download</a>
              </div>
            </div>
            <div class="demo-separator mdl-cell--1-col"></div>
            <div class="demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
            
            </div>
          </div>
         </div> 
    `,
                    directives: [router_1.ROUTER_DIRECTIVES],
                    providers: [UploadService_1.UploadService, DownloadService_1.DownloadService, { useClass: DownloadService_1.DownloadService }]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, SharedService_1.SharedService, router_1.RouteParams, UploadService_1.UploadService, http_1.Http])
            ], AptContentComponent);
            exports_1("AptContentComponent", AptContentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcHRDb250ZW50Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUdBO2dCQU1JLFlBQW9CLGdCQUFrQyxFQUFVLGFBQTRCLEVBQUUsTUFBbUIsRUFBVSxhQUE0QixFQUFVLElBQVU7b0JBQXZKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQStCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO29CQUFVLFNBQUksR0FBSixJQUFJLENBQU07b0JBRjNLLFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBR3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDckIsQ0FBQztnQkFHRCxRQUFRO29CQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsTUFBTTtvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLCtCQUErQixFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTt3QkFDaEgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEIsQ0FBQyxFQUFFLENBQUMsS0FBSzt3QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELG1CQUFtQjtnQkFDbkIsaUJBQWlCO2dCQUNqQix5REFBeUQ7Z0JBQ3pELHNCQUFzQjtnQkFDdEIsMkNBQTJDO2dCQUMzQyxrRUFBa0U7Z0JBQ2xFLG1DQUFtQztnQkFDbkMsMENBQTBDO2dCQUMxQyxVQUFVO2dCQUNWLElBQUk7Z0JBRUosYUFBYTtvQkFDVCxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO29CQUMvQixJQUFJLEdBQUcsR0FBRyx3Q0FBd0MsQ0FBQztvQkFDbkQsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMzQixHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztvQkFFekIsR0FBRyxDQUFDLGtCQUFrQixHQUFHO3dCQUV0QixtRUFBbUU7d0JBQ25FLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDNUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQyxDQUFDOzRCQUNoRSxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO3dCQUMvQixDQUFDO29CQUNMLENBQUMsQ0FBQztvQkFFRix5QkFBeUI7b0JBQ3pCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDZixDQUFDO2dCQUVELGVBQWUsQ0FBQyxTQUFjO29CQUMxQixJQUFJLENBQUMsYUFBYSxHQUFpQixTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsUUFBUTtvQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO2dCQUM5QixDQUFDO1lBQ0wsQ0FBQztZQXZKRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0ZUO29CQUVELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO29CQUMvQixTQUFTLEVBQUUsQ0FBQyw2QkFBYSxFQUFDLGlDQUFlLEVBQUUsRUFBRSxRQUFRLEVBQUUsaUNBQWUsRUFBRSxDQUFDO2lCQUM1RSxDQUFDOzttQ0FBQTtZQUVGLHFEQStEQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcHRDb250ZW50Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVQYXJhbXN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuLi9hcHAvRGFzaGJvYXJkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXBhcnRtZW50U2VydmljZX0gZnJvbSBcIi4vQXBhcnRtZW50U2VydmljZVwiO1xyXG5pbXBvcnQge1NoYXJlZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9TaGFyZWRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXBsb2FkU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1VwbG9hZFNlcnZpY2VcIjtcclxuaW1wb3J0IHtEb3dubG9hZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9Eb3dubG9hZFNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuLy9pbXBvcnQge3NhdmVBc30gZnJvbSAnRmlsZVNhdmVyJztcclxuLy8gaW1wb3J0ICogYXMgXyBmcm9tICdGaWxlU2F2ZXInO1xyXG5cclxuZGVjbGFyZSB2YXIgc2F2ZUFzOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXB0Y29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYCA8aDE+Q29udGVudCBQYWdlPC9oMT5cclxuICAgICA8YSBbcm91dGVyTGlua109XCJbJ0FwdERldGFpbHMnXVwiPkJhY2sgYnV0dG9uIG5vdCB3b3JraW5nIHByb3Blcmx5PC9hPlxyXG4gICAgIDxkaXYgY2xhc3M9XCJtZGwtZ3JpZCBkZW1vLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLWNoYXJ0cyBtZGwtY29sb3ItLXdoaXRlIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1ncmFwaHMgbWRsLXNoYWRvdy0tMmRwIG1kbC1jb2xvci0td2hpdGUgbWRsLWNlbGwgbWRsLWNlbGwtLTgtY29sXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPiAgICAgICAgXHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZFwiPlxyXG5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5BUFQgSUQ6IHt7ZGF0YS5hcHRJRH19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5BUFQgSUQ6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiZGF0YS5hcHRJRFwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPkFwdCBUeXBlOiB7e2RhdGEuYXB0VHlwZX19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5BcHQgVHlwZTogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5hcHRUeXBlXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+QnVzaW5lc3MgVW5pdDoge3tkYXRhLkJ1c2luZXNzVW5pdH19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5CdXNpbmVzcyBVbml0OiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLkJ1c2luZXNzVW5pdFwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPkFwdCBEZXNjcmlwdGlvbjoge3tkYXRhLmFwdERlc2N9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+QXB0IERlc2NyaXB0aW9uOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLmFwdERlc2NcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5BcHQgQWRkcmVzczoge3tkYXRhLmFwdEFkZHJlc3N9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+QXB0IEFkZHJlc3M6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEuYXB0QWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPlN0YXR1czoge3tkYXRhLmFwdFN0YXR1c319IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5TdGF0dXM6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEuYXB0U3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+TGVhc2UgRW5kIERhdGU6IHt7ZGF0YS5sZWFzZVN0YXJ0RGF0ZX19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5MZWFzZSBFbmQgRGF0ZTogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5sZWFzZVN0YXJ0RGF0ZVwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPkxlYXNlIEVuZCBEYXRlOiB7e2RhdGEubGVhc2VFbmREYXRlfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPkxlYXNlIEVuZCBEYXRlOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLmxlYXNlRW5kRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPlByaW1hcnkgRmlyc3QgTmFtZToge3tkYXRhLnJlc2lkZW50Rmlyc3ROYW1lfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPlByaW1hcnkgRmlyc3QgTmFtZTogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5yZXNpZGVudEZpcnN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPiBQcmltYXJ5IExhc3QgTmFtZToge3tkYXRhLnJlc2lkZW50TGFzdE5hbWV9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+UHJpbWFyeSBMYXN0IE5hbWU6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEucmVzaWRlbnRMYXN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPlByaW1hcnkgRW1haWw6IHt7ZGF0YS5yZXNpZGVudEVtYWlsfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPlByaW1hcnkgRW1haWw6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEucmVzaWRlbnRFbWFpbFwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPkRhdGUgb2YgQmlydGg6IHt7ZGF0YS5yZXNpZGVudERPQn19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5EYXRlIG9mIEJpcnRoOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLnJlc2lkZW50RE9CXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCI+U2Vjb25kYXJ5IEZpcnN0IE5hbWU6IHt7ZGF0YS5zZWNvbmRhcnlSZXNpZGVudEZpcnN0TmFtZX19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5TZWNvbmRhcnkgRmlyc3QgTmFtZTogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5zZWNvbmRhcnlSZXNpZGVudEZpcnN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPlNlY29uZGFyeSBMYXN0IE5hbWU6IHt7ZGF0YS5zZWNvbmRhcnlSZXNpZGVudExhc3ROYW1lfX0gPC9sYWJlbD4gPGJyLz5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cImlzRWRpdFwiPlNlY29uZGFyeSBMYXN0IE5hbWU6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEuc2Vjb25kYXJ5UmVzaWRlbnRMYXN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPlNlY29uZGFyeSBFbWFpbDoge3tkYXRhLnNlY29uZGFyeVJlc2lkZW50RW1haWx9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+U2Vjb25kYXJ5IEVtYWlsOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLnNlY29uZGFyeVJlc2lkZW50RW1haWxcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5TZWNvbmRhcnkgRE9COiB7e2RhdGEuc2Vjb25kYXJ5UmVzaWRlbnRET0J9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+U2Vjb25kYXJ5IERPQjogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5zZWNvbmRhcnlSZXNpZGVudERPQlwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiIWlzRWRpdFwiIChjbGljayk9XCJpc0VkaXQ9dHJ1ZVwiPlJlbnQgJDoge3tkYXRhLnJlbnRBbW91bnR9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+UmVudCAkOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgdHlwZT1cInRleHRcIiAgWyhuZ01vZGVsKV09XCJkYXRhLnJlbnRBbW91bnRcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5MYXN0IFBheW1lbnQgRGF0ZToge3tkYXRhLmxhc3RQYXltZW50RGF0ZX19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5MYXN0IFBheW1lbnQgRGF0ZTogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5sYXN0UGF5bWVudERhdGVcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5OZXh0IFBheW1lbnQgRGF0ZToge3tkYXRhLm5leHRQYXltZW50RGF0ZX19IDwvbGFiZWw+IDxici8+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIj5OZXh0IFBheW1lbnQgRGF0ZTogPC9sYWJlbD4gPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgIFsobmdNb2RlbCldPVwiZGF0YS5uZXh0UGF5bWVudERhdGVcIj5cclxuICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIj5QYXltZW50IE1ldGhvZDoge3tkYXRhLnBheW1lbnRNZXRob2R9fSA8L2xhYmVsPiA8YnIvPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCI+UGF5bWVudCBNZXRob2Q6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cImRhdGEucGF5bWVudE1ldGhvZFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj4gPGJyLz48YnIvPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD1mYWxzZVwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZCBtZGwtYnV0dG9uLS1jb2xvcmVkXCIgbmFtZT1cImNhbmNlbFwiPmNhbmNlbDwvYnV0dG9uPiAgICBcclxuICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNFZGl0XCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1idXR0b24tLWNvbG9yZWRcIiBuYW1lPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiPnN1Ym1pdDwvYnV0dG9uPiAgICBcclxuICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXY+PGxhYmVsPkludGVybmFsIF9pZCAgPC9sYWJlbD57e2RhdGEuX2lkfX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBmaWxlLi4uXCI+PC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tY2FyZHMgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS04LWNvbC10YWJsZXQgbWRsLWdyaWQgbWRsLWdyaWQtLW5vLXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kIG1kbC1jb2xvci0tdGVhbC0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+RG9jdW1lbnRzPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiIChjbGljayk9XCJ1cGxvYWQoKVwiPlVwbG9hZCBEb2NzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIiAoY2xpY2spPVwiZG93bmxvYWRGaWxlMigpXCI+ZG93bmxvYWQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZXBhcmF0b3IgbWRsLWNlbGwtLTEtY29sXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLW9wdGlvbnMgbWRsLWNhcmQgbWRsLWNvbG9yLS1kZWVwLXB1cnBsZS01MDAgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tMy1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+IFxyXG4gICAgYCxcclxuXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbVXBsb2FkU2VydmljZSxEb3dubG9hZFNlcnZpY2UsIHsgdXNlQ2xhc3M6IERvd25sb2FkU2VydmljZSB9XSAgICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwdENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGRhdGE6IGFueTtcclxuICAgIGZpbGVzVG9VcGxvYWQ6IEFycmF5PEZpbGU+O1xyXG4gICAgaXNFZGl0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGFydG1lbnRTZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlLCBwcml2YXRlIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2UsIHBhcmFtczogUm91dGVQYXJhbXMsIHByaXZhdGUgdXBsb2FkU2VydmljZTogVXBsb2FkU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICAgICAgdGhpcy5maWxlc1RvVXBsb2FkID0gW107XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuc2hhcmVkU2VydmljZS50ZW1wO1xyXG4gICAgfVxyXG4gICBcclxuICAgIHVwbG9hZCgpe1xyXG4gICAgICBjb25zb2xlLmxvZygndXBsb2FkIGJ1dHRvbiBjbGlja2VkJyk7ICAgICAgXHJcbiAgICAgIHRoaXMudXBsb2FkU2VydmljZS5tYWtlRmlsZVJlcXVlc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdXBsb2Fkc1wiLCBbXSwgdGhpcy5maWxlc1RvVXBsb2FkLHRoaXMuZGF0YS5faWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpOyAgICAgICAgICBcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZG93bmxvYWRGaWxlKCkge1xyXG4gICAgLy8gdGhpcy5odHRwLmdldChcclxuICAgIC8vICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91cGxvYWRzL3Rlc3QucGRmJykuc3Vic2NyaWJlKFxyXG4gICAgLy8gICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgLy8gICAgICAgdmFyIG1lZGlhVHlwZSA9ICdhcHBsaWNhdGlvbi9wZGYnO1xyXG4gICAgLy8gICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbcmVzcG9uc2UuX2JvZHldLCB7dHlwZTogbWVkaWFUeXBlfSk7XHJcbiAgICAvLyAgICAgICB2YXIgZmlsZW5hbWUgPSAndGVzdC5wZGYnO1xyXG4gICAgLy8gICAgICAgZmlsZXNhdmVyLnNhdmVBcyhibG9iLCBmaWxlbmFtZSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlMigpe1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgICAgICAgIFxyXG4gICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VwbG9hZHMvdGVzdC5wZGYnO1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XHJcblxyXG4gICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiB3ZSBnZXQgYW4gSFRUUCBzdGF0dXMgT0sgKDIwMCksIHNhdmUgdGhlIGZpbGUgdXNpbmcgZmlsZVNhdmVyXHJcbiAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbdGhpcy5yZXNwb25zZV0sIHt0eXBlOiAnYXBwbGljYXRpb24vcGRmJ30pO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUFzKGJsb2IsICdSZXBvcnQucGRmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBTdGFydCB0aGUgQWpheCByZXF1ZXN0XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxlQ2hhbmdlRXZlbnQoZmlsZUlucHV0OiBhbnkpe1xyXG4gICAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IDxBcnJheTxGaWxlPj4gZmlsZUlucHV0LnRhcmdldC5maWxlcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzVG9VcGxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXQgYnV0dG9uJylcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
