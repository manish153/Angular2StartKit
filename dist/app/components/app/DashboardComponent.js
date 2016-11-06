System.register(['@angular/core', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            let DashboardComponent = class DashboardComponent {
                constructor() {
                    this.lineChartData = [
                        [65, 59, 80, 81, 56, 55, 40],
                        [28, 48, 40, 19, 86, 27, 90]
                    ];
                    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
                    this.lineChartType = 'line';
                    this.pieChartType = 'pie';
                    // Pie
                    this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
                    this.pieChartData = [300, 500, 100];
                }
                randomizeType() {
                    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
                    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
                }
                chartClicked(e) {
                    console.log(e);
                }
                chartHovered(e) {
                    console.log(e);
                }
            };
            DashboardComponent = __decorate([
                core_1.Component({
                    selector: 'dashboard',
                    styles: [`
    .chart {
      display: block;
      width: 100%;
    }`
                    ],
                    template: `
   <div class="mdl-grid demo-content"> 
    <div class="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid"> 
       <div class="col-md-6">
        <base-chart class="chart"
        [data]="lineChartData"
        [labels]="lineChartLabels"
        [options]="lineChartOptions"
        [chartType]="lineChartType"
        (chartHover)="chartHovered($event)"
        (chartClick)="chartClicked($event)"></base-chart>
       </div>
      <div class="col-md-6">
       <base-chart class="chart"
       [data]="pieChartData"
       [labels]="pieChartLabels"
       [chartType]="pieChartType"
       (chartHover)="chartHovered($event)"
       (chartClick)="chartClicked($event)"></base-chart>
      </div>

      <div class="col-md-12 text-center" style="margin-top: 10px;">
       <button (click)="randomizeType()" style="display: inline-block">Toggle</button>
      </div>
    </div>  
  </div>     
`,
                    directives: [common_1.CORE_DIRECTIVES, common_1.NgClass]
                }), 
                __metadata('design:paramtypes', [])
            ], DashboardComponent);
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9EYXNoYm9hcmRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0Q0E7Z0JBRUU7b0JBRU8sa0JBQWEsR0FBZTt3QkFDakMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7d0JBQzVCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO3FCQUM3QixDQUFDO29CQUNLLG9CQUFlLEdBQWUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDL0Ysa0JBQWEsR0FBVyxNQUFNLENBQUM7b0JBQy9CLGlCQUFZLEdBQVcsS0FBSyxDQUFDO29CQUVwQyxNQUFNO29CQUNDLG1CQUFjLEdBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDOUUsaUJBQVksR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBWmhDLENBQUM7Z0JBY1YsYUFBYTtvQkFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO29CQUNwRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssVUFBVSxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUM7Z0JBQzVFLENBQUM7Z0JBRU0sWUFBWSxDQUFDLENBQU07b0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRU0sWUFBWSxDQUFDLENBQU07b0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLENBQUM7WUFFSCxDQUFDO1lBbkVEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLE1BQU0sRUFBRSxDQUFDOzs7O01BSUw7cUJBQ0g7b0JBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTBCWDtvQkFDQyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLGdCQUFPLENBQUM7aUJBQ3ZDLENBQUM7O2tDQUFBO1lBRUYsbURBNkJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL0Rhc2hib2FyZENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgTmdDbGFzc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtDSEFSVF9ESVJFQ1RJVkVTfSBmcm9tICduZzItY2hhcnRzL25nMi1jaGFydHMnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Rhc2hib2FyZCcsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgLmNoYXJ0IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfWBcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgIDxkaXYgY2xhc3M9XCJtZGwtZ3JpZCBkZW1vLWNvbnRlbnRcIj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwiZGVtby1jaGFydHMgbWRsLWNvbG9yLS13aGl0ZSBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiPiBcclxuICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxiYXNlLWNoYXJ0IGNsYXNzPVwiY2hhcnRcIlxyXG4gICAgICAgIFtkYXRhXT1cImxpbmVDaGFydERhdGFcIlxyXG4gICAgICAgIFtsYWJlbHNdPVwibGluZUNoYXJ0TGFiZWxzXCJcclxuICAgICAgICBbb3B0aW9uc109XCJsaW5lQ2hhcnRPcHRpb25zXCJcclxuICAgICAgICBbY2hhcnRUeXBlXT1cImxpbmVDaGFydFR5cGVcIlxyXG4gICAgICAgIChjaGFydEhvdmVyKT1cImNoYXJ0SG92ZXJlZCgkZXZlbnQpXCJcclxuICAgICAgICAoY2hhcnRDbGljayk9XCJjaGFydENsaWNrZWQoJGV2ZW50KVwiPjwvYmFzZS1jaGFydD5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgIDxiYXNlLWNoYXJ0IGNsYXNzPVwiY2hhcnRcIlxyXG4gICAgICAgW2RhdGFdPVwicGllQ2hhcnREYXRhXCJcclxuICAgICAgIFtsYWJlbHNdPVwicGllQ2hhcnRMYWJlbHNcIlxyXG4gICAgICAgW2NoYXJ0VHlwZV09XCJwaWVDaGFydFR5cGVcIlxyXG4gICAgICAgKGNoYXJ0SG92ZXIpPVwiY2hhcnRIb3ZlcmVkKCRldmVudClcIlxyXG4gICAgICAgKGNoYXJ0Q2xpY2spPVwiY2hhcnRDbGlja2VkKCRldmVudClcIj48L2Jhc2UtY2hhcnQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiB0ZXh0LWNlbnRlclwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIj5cclxuICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJhbmRvbWl6ZVR5cGUoKVwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrXCI+VG9nZ2xlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+ICBcclxuICA8L2Rpdj4gICAgIFxyXG5gLFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIE5nQ2xhc3NdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIGxpbmVDaGFydERhdGE6IEFycmF5PGFueT4gPSBbXHJcbiAgICBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDBdLFxyXG4gICAgWzI4LCA0OCwgNDAsIDE5LCA4NiwgMjcsIDkwXVxyXG4gIF07XHJcbiAgcHVibGljIGxpbmVDaGFydExhYmVsczogQXJyYXk8YW55PiA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5J107XHJcbiAgcHVibGljIGxpbmVDaGFydFR5cGU6IHN0cmluZyA9ICdsaW5lJztcclxuICBwdWJsaWMgcGllQ2hhcnRUeXBlOiBzdHJpbmcgPSAncGllJztcclxuXHJcbiAgLy8gUGllXHJcbiAgcHVibGljIHBpZUNoYXJ0TGFiZWxzOiBzdHJpbmdbXSA9IFsnRG93bmxvYWQgU2FsZXMnLCAnSW4tU3RvcmUgU2FsZXMnLCAnTWFpbCBTYWxlcyddO1xyXG4gIHB1YmxpYyBwaWVDaGFydERhdGE6IG51bWJlcltdID0gWzMwMCwgNTAwLCAxMDBdO1xyXG5cclxuICBwdWJsaWMgcmFuZG9taXplVHlwZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubGluZUNoYXJ0VHlwZSA9IHRoaXMubGluZUNoYXJ0VHlwZSA9PT0gJ2xpbmUnID8gJ2JhcicgOiAnbGluZSc7XHJcbiAgICB0aGlzLnBpZUNoYXJ0VHlwZSA9IHRoaXMucGllQ2hhcnRUeXBlID09PSAnZG91Z2hudXQnID8gJ3BpZScgOiAnZG91Z2hudXQnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYXJ0Q2xpY2tlZChlOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYXJ0SG92ZXJlZChlOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
