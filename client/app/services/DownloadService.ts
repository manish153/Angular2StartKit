import {Injectable} from '@angular/core';
import {BrowserXhr} from '@angular/http';

@Injectable()
export class DownloadService extends BrowserXhr {
  build(): any {
    let xhr = super.build();
    xhr.responseType = "blob";
    return <any>(xhr);
  }
}