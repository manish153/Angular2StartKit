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