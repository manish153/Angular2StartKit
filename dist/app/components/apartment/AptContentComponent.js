System.register(['angular2/core', "angular2/router", "./ApartmentService", "../../services/SharedService", "../../services/UploadService"], function(exports_1, context_1) {
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
    var core_1, router_1, ApartmentService_1, SharedService_1, UploadService_1;
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
            }],
        execute: function() {
            let AptContentComponent = class AptContentComponent {
                constructor(apartmentService, sharedService, params, uploadService) {
                    this.apartmentService = apartmentService;
                    this.sharedService = sharedService;
                    this.uploadService = uploadService;
                    this.filesToUpload = [];
                }
                ngOnInit() { }
                upload() {
                    console.log('upload button clicked');
                    this.uploadService.makeFileRequest("http://localhost:3000/upload", [], this.filesToUpload).then((result) => {
                        console.log(result);
                    }, (error) => {
                        console.error(error);
                    });
                }
                fileChangeEvent(fileInput) {
                    this.filesToUpload = fileInput.target.files;
                    console.log(this.filesToUpload);
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
                    directives: [router_1.ROUTER_DIRECTIVES],
                    providers: [UploadService_1.UploadService]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, SharedService_1.SharedService, router_1.RouteParams, UploadService_1.UploadService])
            ], AptContentComponent);
            exports_1("AptContentComponent", AptContentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcHRDb250ZW50Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOENBO2dCQU1JLFlBQW9CLGdCQUFrQyxFQUFVLGFBQTRCLEVBQUUsTUFBbUIsRUFBVSxhQUE0QjtvQkFBbkkscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtvQkFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFBK0Isa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQ25KLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUdELFFBQVEsS0FBSSxDQUFDO2dCQUViLE1BQU07b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUVyQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyw4QkFBOEIsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07d0JBQ2pHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hCLENBQUMsRUFBRSxDQUFDLEtBQUs7d0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxlQUFlLENBQUMsU0FBYztvQkFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBaUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0wsQ0FBQztZQWpFRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThCVDtvQkFFRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztvQkFDL0IsU0FBUyxFQUFFLENBQUMsNkJBQWEsQ0FBQztpQkFDN0IsQ0FBQzs7bUNBQUE7WUFFRixxREEyQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcGFydG1lbnQvQXB0Q29udGVudENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlUGFyYW1zfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBwL0Rhc2hib2FyZENvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuL0FwYXJ0bWVudFNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaGFyZWRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvU2hhcmVkU2VydmljZVwiO1xyXG5pbXBvcnQge1VwbG9hZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9VcGxvYWRTZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwdGNvbnRlbnQnLFxyXG4gICAgdGVtcGxhdGU6IGAgPGgxPkNvbnRlbnQgUGFnZTwvaDE+XHJcbiAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydBcHREZXRhaWxzJ11cIj5CYWNrIGJ1dHRvbiBub3Qgd29ya2luZyBwcm9wZXJseTwvYT5cclxuICAgICA8ZGl2IGNsYXNzPVwibWRsLWdyaWQgZGVtby1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1jaGFydHMgbWRsLWNvbG9yLS13aGl0ZSBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tZ3JhcGhzIG1kbC1zaGFkb3ctLTJkcCBtZGwtY29sb3ItLXdoaXRlIG1kbC1jZWxsIG1kbC1jZWxsLS04LWNvbFwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2PiA8aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZS4uLlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tY2FyZHMgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS04LWNvbC10YWJsZXQgbWRsLWdyaWQgbWRsLWdyaWQtLW5vLXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kIG1kbC1jb2xvci0tdGVhbC0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+RG9jdW1lbnRzPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiIChjbGljayk9XCJ1cGxvYWQoKVwiPlVwbG9hZCBEb2NzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5WaWV3IEFsbCBEb2NzPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tc2VwYXJhdG9yIG1kbC1jZWxsLS0xLWNvbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1vcHRpb25zIG1kbC1jYXJkIG1kbC1jb2xvci0tZGVlcC1wdXJwbGUtNTAwIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTMtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PiBcclxuICAgIGAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW1VwbG9hZFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXB0Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgZGF0YTogYW55O1xyXG4gICAgZmlsZXNUb1VwbG9hZDogQXJyYXk8RmlsZT47XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBhcnRtZW50U2VydmljZTogQXBhcnRtZW50U2VydmljZSwgcHJpdmF0ZSBzaGFyZWRTZXJ2aWNlOiBTaGFyZWRTZXJ2aWNlLCBwYXJhbXM6IFJvdXRlUGFyYW1zLCBwcml2YXRlIHVwbG9hZFNlcnZpY2U6IFVwbG9hZFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSBbXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7fVxyXG4gICBcclxuICAgIHVwbG9hZCgpe1xyXG4gICAgICBjb25zb2xlLmxvZygndXBsb2FkIGJ1dHRvbiBjbGlja2VkJyk7XHJcblxyXG4gICAgICB0aGlzLnVwbG9hZFNlcnZpY2UubWFrZUZpbGVSZXF1ZXN0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3VwbG9hZFwiLCBbXSwgdGhpcy5maWxlc1RvVXBsb2FkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsZUNoYW5nZUV2ZW50KGZpbGVJbnB1dDogYW55KXtcclxuICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSA8QXJyYXk8RmlsZT4+IGZpbGVJbnB1dC50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlc1RvVXBsb2FkKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
