import {Injectable} from 'angular2/core';
import {BrowserXhr} from 'angular2/http';

@Injectable()
export class DownloadService extends BrowserXhr {
  build(): any {
    let xhr = super.build();
    xhr.responseType = "blob";
    return <any>(xhr);
  }
}