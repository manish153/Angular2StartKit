import {Http, Response, Headers} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map';

@Injectable()
export class ApartmentService {

    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    /*APARTMENT SERVICE METHODS*/
    getApartments() {
        return this.http.get('./api/apartments').map((res: Response) => res.json());
    }

    postApartment(data: any) {
        return this.http.post('/api/apartments',
            JSON.stringify(data), {
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
            .map((res: Response) => res.json()).subscribe();
    }

    /*PROFILE SERVICE METHODS*/
    getProfile(userEmail: string) {
        return this.http.get(`./api/apartments/getprofile/${userEmail}`).map((res: Response) => res.json());
    }

    getUsersList(){        
        return this.http.get('/api/getusers').map((res: Response) => res.json());   
    }

    /*TASK SERVICE METHODS*/
    postTasks(data: any) {
        return new Promise((resolve,reject)=> {
         this.http.post('/api/newtask',
            JSON.stringify(data), {
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
            .map((res: Response) => res.json()).subscribe(data => {resolve(data)}, error => reject(error));
          });  
    }

    getAllTasks() {
        return this.http.get('./api/newtask').map((res: Response) => res.json());
    }

    updateTask(data:any){        
        return new Promise((resolve,reject)=> {
          this.http.put(`./api/newtask/${data._id}`,
          JSON.stringify(data),{ 
             headers: new Headers({'Content-Type':'application/json'})
        })
        .map((res: Response) => res.json()).subscribe(data => {resolve(data)}, error => reject(error))
      });   
    }

    getMyTask(userEmail: string) { 
        console.log('getMyTask' +userEmail);
        return this.http.get(`./api/mytask/${userEmail}`).map((res: Response) => res.json());
    }

    deleteTask() { }

    markCompleted(data:any) { 
         return new Promise((resolve,reject)=> {
          this.http.put(`./api/mark/${data._id}`,
          JSON.stringify(data),{ 
             headers: new Headers({'Content-Type':'application/json'})
        })
        .map((res: Response) => res.json()).subscribe(data => {resolve(data)}, error => reject(error))
      });   
    }


}