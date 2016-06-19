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