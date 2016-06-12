import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UploadService {
  progress$:any;
  progressObserver:any;
  progress: number = 1

  constructor () {}

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
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