//  import {Component,Input } from 'angular2/core';
//     import {BrowserXhr} from 'angular2/http';
//     // Use Filesaver.js to save binary to file
//     // https://github.com/eligrey/FileSaver.js/
//     let fileSaver = require('filesaver.js');
//     @Component({
//       selector: 'pdf-downloader',
//       template: `
//         <button
//            class="btn btn-secondary-outline btn-sm "
//           (click)="download()">
//             <span class="fa fa-download" *ngIf="!pending"></span>
//             <span class="fa fa-refresh fa-spin" *ngIf="pending"></span>
//         </button>
//         `
//    })
//    export class PdfDownloader  {
//        @Input() no: any;
//        public pending:boolean = false;
//        constructor() {}
//        public download() {
//         // Xhr creates new context so we need to create reference to this
//         let self = this;
//         // Status flag used in the template.
//         this.pending = true;
//         // Create the Xhr request object
//         let xhr = new XMLHttpRequest();
//         let url =  `/api/pdf/iticket/${this.no}?lang=en`;
//         xhr.open('GET', url, true);
//         xhr.responseType = 'blob';
//         // Xhr callback when we get a result back
//         // We are not using arrow function because we need the 'this' context
//         xhr.onreadystatechange = function() {
//             // We use setTimeout to trigger change detection in Zones
//             setTimeout( () => { self.pending = false; }, 0);
//             // If we get an HTTP status OK (200), save the file using fileSaver
//             if(xhr.readyState === 4 && xhr.status === 200) {
//                 var blob = new Blob([this.response], {type: 'application/pdf'});
//                 fileSaver.saveAs(blob, 'Report.pdf');
//             }
//         };
//         // Start the Ajax request
//         xhr.send();
//     }
// } 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1EQUFtRDtBQUNuRCxnREFBZ0Q7QUFFaEQsaURBQWlEO0FBQ2pELGtEQUFrRDtBQUNsRCwrQ0FBK0M7QUFHL0MsbUJBQW1CO0FBQ25CLG9DQUFvQztBQUNwQyxvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLHVEQUF1RDtBQUN2RCxrQ0FBa0M7QUFDbEMsb0VBQW9FO0FBQ3BFLDBFQUEwRTtBQUMxRSxvQkFBb0I7QUFDcEIsWUFBWTtBQUNaLFFBQVE7QUFFUixtQ0FBbUM7QUFFbkMsMkJBQTJCO0FBRTNCLHlDQUF5QztBQUV6QywwQkFBMEI7QUFFMUIsNkJBQTZCO0FBRTdCLDRFQUE0RTtBQUM1RSwyQkFBMkI7QUFFM0IsK0NBQStDO0FBQy9DLCtCQUErQjtBQUUvQiwyQ0FBMkM7QUFDM0MsMENBQTBDO0FBQzFDLDREQUE0RDtBQUM1RCxzQ0FBc0M7QUFDdEMscUNBQXFDO0FBRXJDLG9EQUFvRDtBQUNwRCxnRkFBZ0Y7QUFDaEYsZ0RBQWdEO0FBRWhELHdFQUF3RTtBQUN4RSwrREFBK0Q7QUFFL0Qsa0ZBQWtGO0FBQ2xGLCtEQUErRDtBQUMvRCxtRkFBbUY7QUFDbkYsd0RBQXdEO0FBQ3hELGdCQUFnQjtBQUNoQixhQUFhO0FBRWIsb0NBQW9DO0FBQ3BDLHNCQUFzQjtBQUN0QixRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcGFydG1lbnQvdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICBpbXBvcnQge0NvbXBvbmVudCxJbnB1dCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG4vLyAgICAgaW1wb3J0IHtCcm93c2VyWGhyfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbi8vICAgICAvLyBVc2UgRmlsZXNhdmVyLmpzIHRvIHNhdmUgYmluYXJ5IHRvIGZpbGVcclxuLy8gICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L0ZpbGVTYXZlci5qcy9cclxuLy8gICAgIGxldCBmaWxlU2F2ZXIgPSByZXF1aXJlKCdmaWxlc2F2ZXIuanMnKTtcclxuXHJcblxyXG4vLyAgICAgQENvbXBvbmVudCh7XHJcbi8vICAgICAgIHNlbGVjdG9yOiAncGRmLWRvd25sb2FkZXInLFxyXG4vLyAgICAgICB0ZW1wbGF0ZTogYFxyXG4vLyAgICAgICAgIDxidXR0b25cclxuLy8gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5LW91dGxpbmUgYnRuLXNtIFwiXHJcbi8vICAgICAgICAgICAoY2xpY2spPVwiZG93bmxvYWQoKVwiPlxyXG4vLyAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWRvd25sb2FkXCIgKm5nSWY9XCIhcGVuZGluZ1wiPjwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIiAqbmdJZj1cInBlbmRpbmdcIj48L3NwYW4+XHJcbi8vICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgYFxyXG4vLyAgICB9KVxyXG5cclxuLy8gICAgZXhwb3J0IGNsYXNzIFBkZkRvd25sb2FkZXIgIHtcclxuXHJcbi8vICAgICAgICBASW5wdXQoKSBubzogYW55O1xyXG5cclxuLy8gICAgICAgIHB1YmxpYyBwZW5kaW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbi8vICAgICAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4vLyAgICAgICAgcHVibGljIGRvd25sb2FkKCkge1xyXG5cclxuLy8gICAgICAgICAvLyBYaHIgY3JlYXRlcyBuZXcgY29udGV4dCBzbyB3ZSBuZWVkIHRvIGNyZWF0ZSByZWZlcmVuY2UgdG8gdGhpc1xyXG4vLyAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbi8vICAgICAgICAgLy8gU3RhdHVzIGZsYWcgdXNlZCBpbiB0aGUgdGVtcGxhdGUuXHJcbi8vICAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcclxuXHJcbi8vICAgICAgICAgLy8gQ3JlYXRlIHRoZSBYaHIgcmVxdWVzdCBvYmplY3RcclxuLy8gICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgICAgICAgbGV0IHVybCA9ICBgL2FwaS9wZGYvaXRpY2tldC8ke3RoaXMubm99P2xhbmc9ZW5gO1xyXG4vLyAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4vLyAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XHJcblxyXG4vLyAgICAgICAgIC8vIFhociBjYWxsYmFjayB3aGVuIHdlIGdldCBhIHJlc3VsdCBiYWNrXHJcbi8vICAgICAgICAgLy8gV2UgYXJlIG5vdCB1c2luZyBhcnJvdyBmdW5jdGlvbiBiZWNhdXNlIHdlIG5lZWQgdGhlICd0aGlzJyBjb250ZXh0XHJcbi8vICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuLy8gICAgICAgICAgICAgLy8gV2UgdXNlIHNldFRpbWVvdXQgdG8gdHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uIGluIFpvbmVzXHJcbi8vICAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHsgc2VsZi5wZW5kaW5nID0gZmFsc2U7IH0sIDApO1xyXG5cclxuLy8gICAgICAgICAgICAgLy8gSWYgd2UgZ2V0IGFuIEhUVFAgc3RhdHVzIE9LICgyMDApLCBzYXZlIHRoZSBmaWxlIHVzaW5nIGZpbGVTYXZlclxyXG4vLyAgICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcclxuLy8gICAgICAgICAgICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW3RoaXMucmVzcG9uc2VdLCB7dHlwZTogJ2FwcGxpY2F0aW9uL3BkZid9KTtcclxuLy8gICAgICAgICAgICAgICAgIGZpbGVTYXZlci5zYXZlQXMoYmxvYiwgJ1JlcG9ydC5wZGYnKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgIC8vIFN0YXJ0IHRoZSBBamF4IHJlcXVlc3RcclxuLy8gICAgICAgICB4aHIuc2VuZCgpO1xyXG4vLyAgICAgfVxyXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
