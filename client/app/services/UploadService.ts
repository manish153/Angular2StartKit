import {BrowserXhr} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UploadService {

  constructor () {}

    makeFileRequest(url: string, params: Array<string>, files: Array<File>,_idapt: string) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            formData.append("_idapt",_idapt);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response || null));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
            console.log(xhr.responseText);
        });
    }    
 }

