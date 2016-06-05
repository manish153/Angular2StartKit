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
    getBU() {
        return this.http.get('./api/businessunits').map((res: Response) => res.json());
    }

    getApartments() {
        return this.http.get('./api/businessunits/butype').map((res: Response) => res.json());
    }

    /*PROFILE SERVICE METHODS*/
    getProfile(userEmail: string) {
        return this.http.get(`./api/apartments/getprofile/${userEmail}`).map((res: Response) => res.json());
    }

    getUsersList(){        
        return this.http.get('/api/getusers').map((res: Response) => res.json());   
    }

    updateProfile(data: any){
        console.log('in the service method' +data._id);
        this.http.put(`/api/apartments/updateprofile/${data._id}`,
            JSON.stringify(data), {
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
            .map((res: Response) => res.json()).subscribe()
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
    console.log(data._id);      
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