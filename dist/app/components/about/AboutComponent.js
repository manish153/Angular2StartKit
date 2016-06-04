System.register(['angular2/core', "angular2/router", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, router_1, common_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            let AboutComponent = class AboutComponent {
                constructor(fb) {
                    this.fb = fb;
                }
                onSubmit(form) {
                    console.log(this.myForm);
                }
                ngOnInit() {
                    this.myForm = this.fb.group({
                        'name': ['', common_1.Validators.required],
                    });
                }
            };
            AboutComponent = __decorate([
                core_1.Component({
                    selector: 'about',
                    styleUrls: ['../app/assets/app.css'],
                    template: ` <h1>You have successfully logged out</h1>
    <!--<h3>About Form</h3>
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()" #f="ngForm">
    <div>
        <label from="name">Name</label>
        <input [ngFormControl]="myForm.controls['name']" "type="text" id="name" #name="ngForm">
        <span class="validator-error" *ngIf="!name.valid"> required</span>
    </div>
    <button type="submit" [disabled]="!f.valid">submit</button>
    </form>


    <a [routerLink]="['../Home']">Back to Home component</a> -->

    `,
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder])
            ], AboutComponent);
            exports_1("AboutComponent", AboutComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUdJLFlBQW9CLEVBQWU7b0JBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtnQkFBSSxDQUFDO2dCQUd4QyxRQUFRLENBQUMsSUFBSTtvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCxRQUFRO29CQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ3hCLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDcEMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBcENEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0tBY1Q7b0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7aUJBQ2xDLENBQUM7OzhCQUFBO1lBRUYsMkNBZUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hYm91dC9BYm91dENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4uL2hvbWUvSG9tZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWJvdXQnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL2FwcC9hc3NldHMvYXBwLmNzcyddLFxyXG4gICAgdGVtcGxhdGU6IGAgPGgxPllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0PC9oMT5cclxuICAgIDwhLS08aDM+QWJvdXQgRm9ybTwvaDM+XHJcbiAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAjZj1cIm5nRm9ybVwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgZnJvbT1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWyduYW1lJ11cIiBcInR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgI25hbWU9XCJuZ0Zvcm1cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRvci1lcnJvclwiICpuZ0lmPVwiIW5hbWUudmFsaWRcIj4gcmVxdWlyZWQ8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhZi52YWxpZFwiPnN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICA8YSBbcm91dGVyTGlua109XCJbJy4uL0hvbWUnXVwiPkJhY2sgdG8gSG9tZSBjb21wb25lbnQ8L2E+IC0tPlxyXG5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5teUZvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgJ25hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
