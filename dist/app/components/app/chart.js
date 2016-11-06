// import {Directive, ElementRef, Renderer, Input} from '@angular/core';
// @Directive({
//     selector: '[chart]'
// })
// export class ChartDirective {
//     constructor(el: ElementRef, renderer: Renderer) {
//         //el.nativeElement.style.backgroundColor = 'yellow';
//         var data = {
//           labels: ["January", "February", "March", "April", "May", "June", "July"],
//           datasets: [
//               {
//                   label: "My First dataset",
//                   fillColor: "rgba(220,220,220,0.5)",
//                   strokeColor: "rgba(220,220,220,0.8)",
//                   highlightFill: "rgba(220,220,220,0.75)",
//                   highlightStroke: "rgba(220,220,220,1)",
//                   data: [65, 59, 80, 81, 56, 55, 40]
//               },
//               {
//                   label: "My Second dataset",
//                   fillColor: "rgba(151,187,205,0.5)",
//                   strokeColor: "rgba(151,187,205,0.8)",
//                   highlightFill: "rgba(151,187,205,0.75)",
//                   highlightStroke: "rgba(151,187,205,1)",
//                   data: [28, 48, 40, 19, 86, 27, 90]
//               }
//           ]
//       };
//         var options = {
//             scaleBeginAtZero : true,scaleShowGridLines : true,
//             scaleGridLineColor : "rgba(0,0,0,.05)",
//             scaleGridLineWidth : 1,
//             scaleShowHorizontalLines: true,
//             scaleShowVerticalLines: true,
//             barShowStroke : true,
//             barStrokeWidth : 2,
//             barValueSpacing : 5,
//             barDatasetSpacing : 1,
//             legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
//           }
//         var ctx: any = el.nativeElement.getContext("2d");
//         var BarChart = new Chart(ctx);
//         BarChart.Bar(data, options);             
//     }
// } 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RUFBd0U7QUFDeEUsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQixLQUFLO0FBQ0wsZ0NBQWdDO0FBQ2hDLHdEQUF3RDtBQUN4RCwrREFBK0Q7QUFDL0QsdUJBQXVCO0FBQ3ZCLHNGQUFzRjtBQUN0Rix3QkFBd0I7QUFDeEIsa0JBQWtCO0FBQ2xCLCtDQUErQztBQUMvQyx3REFBd0Q7QUFDeEQsMERBQTBEO0FBQzFELDZEQUE2RDtBQUM3RCw0REFBNEQ7QUFDNUQsdURBQXVEO0FBQ3ZELG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsZ0RBQWdEO0FBQ2hELHdEQUF3RDtBQUN4RCwwREFBMEQ7QUFDMUQsNkRBQTZEO0FBQzdELDREQUE0RDtBQUM1RCx1REFBdUQ7QUFDdkQsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxXQUFXO0FBRVgsMEJBQTBCO0FBQzFCLGlFQUFpRTtBQUNqRSxzREFBc0Q7QUFDdEQsc0NBQXNDO0FBQ3RDLDhDQUE4QztBQUM5Qyw0Q0FBNEM7QUFDNUMsb0NBQW9DO0FBQ3BDLGtDQUFrQztBQUNsQyxtQ0FBbUM7QUFDbkMscUNBQXFDO0FBQ3JDLHFRQUFxUTtBQUVyUSxjQUFjO0FBRWQsNERBQTREO0FBQzVELHlDQUF5QztBQUN6QyxvREFBb0Q7QUFFcEQsUUFBUTtBQUVSLElBQUkiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL2NoYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIEBEaXJlY3RpdmUoe1xyXG4vLyAgICAgc2VsZWN0b3I6ICdbY2hhcnRdJ1xyXG4vLyB9KVxyXG4vLyBleHBvcnQgY2xhc3MgQ2hhcnREaXJlY3RpdmUge1xyXG4vLyAgICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4vLyAgICAgICAgIC8vZWwubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcclxuLy8gICAgICAgICB2YXIgZGF0YSA9IHtcclxuLy8gICAgICAgICAgIGxhYmVsczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCJdLFxyXG4vLyAgICAgICAgICAgZGF0YXNldHM6IFtcclxuLy8gICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk15IEZpcnN0IGRhdGFzZXRcIixcclxuLy8gICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMC41KVwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDAuOClcIixcclxuLy8gICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0RmlsbDogXCJyZ2JhKDIyMCwyMjAsMjIwLDAuNzUpXCIsXHJcbi8vICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodFN0cm9rZTogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXHJcbi8vICAgICAgICAgICAgICAgICAgIGRhdGE6IFs2NSwgNTksIDgwLCA4MSwgNTYsIDU1LCA0MF1cclxuLy8gICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTXkgU2Vjb25kIGRhdGFzZXRcIixcclxuLy8gICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiBcInJnYmEoMTUxLDE4NywyMDUsMC41KVwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCJyZ2JhKDE1MSwxODcsMjA1LDAuOClcIixcclxuLy8gICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0RmlsbDogXCJyZ2JhKDE1MSwxODcsMjA1LDAuNzUpXCIsXHJcbi8vICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodFN0cm9rZTogXCJyZ2JhKDE1MSwxODcsMjA1LDEpXCIsXHJcbi8vICAgICAgICAgICAgICAgICAgIGRhdGE6IFsyOCwgNDgsIDQwLCAxOSwgODYsIDI3LCA5MF1cclxuLy8gICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICBdXHJcbi8vICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4vLyAgICAgICAgICAgICBzY2FsZUJlZ2luQXRaZXJvIDogdHJ1ZSxzY2FsZVNob3dHcmlkTGluZXMgOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICBzY2FsZUdyaWRMaW5lQ29sb3IgOiBcInJnYmEoMCwwLDAsLjA1KVwiLFxyXG4vLyAgICAgICAgICAgICBzY2FsZUdyaWRMaW5lV2lkdGggOiAxLFxyXG4vLyAgICAgICAgICAgICBzY2FsZVNob3dIb3Jpem9udGFsTGluZXM6IHRydWUsXHJcbi8vICAgICAgICAgICAgIHNjYWxlU2hvd1ZlcnRpY2FsTGluZXM6IHRydWUsXHJcbi8vICAgICAgICAgICAgIGJhclNob3dTdHJva2UgOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICBiYXJTdHJva2VXaWR0aCA6IDIsXHJcbi8vICAgICAgICAgICAgIGJhclZhbHVlU3BhY2luZyA6IDUsXHJcbi8vICAgICAgICAgICAgIGJhckRhdGFzZXRTcGFjaW5nIDogMSxcclxuLy8gICAgICAgICAgICAgbGVnZW5kVGVtcGxhdGUgOiBcIjx1bCBjbGFzcz1cXFwiPCU9bmFtZS50b0xvd2VyQ2FzZSgpJT4tbGVnZW5kXFxcIj48JSBmb3IgKHZhciBpPTA7IGk8ZGF0YXNldHMubGVuZ3RoOyBpKyspeyU+PGxpPjxzcGFuIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOjwlPWRhdGFzZXRzW2ldLmZpbGxDb2xvciU+XFxcIj48L3NwYW4+PCVpZihkYXRhc2V0c1tpXS5sYWJlbCl7JT48JT1kYXRhc2V0c1tpXS5sYWJlbCU+PCV9JT48L2xpPjwlfSU+PC91bD5cIlxyXG5cclxuLy8gICAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgICAgICB2YXIgY3R4OiBhbnkgPSBlbC5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuLy8gICAgICAgICB2YXIgQmFyQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4KTtcclxuLy8gICAgICAgICBCYXJDaGFydC5CYXIoZGF0YSwgb3B0aW9ucyk7ICAgICAgICAgICAgIFxyXG5cclxuLy8gICAgIH1cclxuXHJcbi8vIH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
