import {Component, OnInit, Inject, Input} from 'angular2/core';
import {ApartmentService} from "./ApartmentService";
import {FormBuilder, Validators, ControlGroup} from "angular2/common";
//import {DownloadService} from "../../services/DownloadService";
import {AptDetailsComponent} from "./AptDetailsComponent";
import {Http, Response, Headers} from 'angular2/http'

@Component({
  selector: 'download',
  template: '<div (click)="downloadFile() ">Download</div>'
  //, providers: [DownloadService] 
       
})
export class DownloadComponent {
  @Input()
  filename:string;

  constructor(private http:Http) {
  }

  // downloadFile() {
  //   this.http.get(
  //     'https://mapapi.apispark.net/v1/images/'+this.filename).subscribe(
  //       (response) => {
  //         var mediaType = 'application/pdf';
  //         var blob = new Blob([response._body], {type: mediaType});
  //         var filename = 'test.pdf';
  //         saveAs(blob, filename);
  //       });
  //   }
}