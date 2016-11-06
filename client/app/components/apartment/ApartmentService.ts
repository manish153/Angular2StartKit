import {Http, Response, Headers} from '@angular/http'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

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
    
    getStats(){ 
        console.log('Request reached');
        return this.http.get('./api/apartments/getstats').map((res: Response) => res.json());
    }

    getDetails(aptType: string, aptStatus: string){
        console.log('request reached getDetails' +aptType +aptStatus)
        return this.http.get(`./api/apartments/getdetails/${aptType}/${aptStatus}`).map((res: Response) => res.json());
    }

    getFiles(_idapt: string){
        return this.http.get(`./api/apartments/files/${_idapt}`).map((res: Response) => res.json());
    }

    /*PROFILE SERVICE METHODS*/
    getProfile(userEmail: string) {
        return this.http.get(`./api/apartments/getprofile/${userEmail}`).map((res: Response) => res.json());
    }

    // getUsersList(){        
    //     return this.http.get('/api/getusers').map((res: Response) => res.json());   
    // }
   
    getInternalUsersList(){        
        return this.http.get('/api/getinternalusers').map((res: Response) => res.json());   
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

    /*REQUEST SERVICE METHODS*/
    postRequests(data: any) {
        return new Promise((resolve,reject)=> {
         this.http.post('/api/newrequest',
            JSON.stringify(data), {
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
            .map((res: Response) => res.json()).subscribe(data => {resolve(data)}, error => reject(error));
          });  
    }

    getMyRequests(userEmail: string) { 
        //console.log('getMyTask' +userEmail);
        return this.http.get(`./api/myrequest/${userEmail}`).map((res: Response) => res.json());
    }

    getAdminRequests(){
        return this.http.get('./api/adminrequest').map((res: Response) => res.json());
    }

    postConvertToTask(data:any) { 
         return new Promise((resolve,reject)=> {
          this.http.put(`./api/convertrequest/${data._id}`,
          JSON.stringify(data),{ 
             headers: new Headers({'Content-Type':'application/json'})
        })
        .map((res: Response) => res.json()).subscribe(data => {resolve(data)}, error => reject(error))
      });   
    }

     editApt(data: any) {
        return new Promise((resolve,reject)=> {
         this.http.put(`./api/editapt/${data._id}`,
            JSON.stringify(data), {
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
            .map((res: Response) => res.json()).subscribe(data => {resolve(data)}, error => reject(error));
          });  
    }

    searchApt(aptID : string){
      console.log('Inside searchApt ' +aptID)
      return this.http.get(`./api/apartments/search/${aptID}`).map((res: Response) => res.json());
    //   return new Promise((resolve,reject)=> {
    //      this.http.get(`./api/apartments/search/${aptID}`)
    //         .map((res: Response) => res.json()).subscribe(data => {resolve(data)}, error => reject(error));
    //  console.log(resolve);
        //   });  
    }


    searchApt2(aptID : string):Observable<Object[]>{
      console.log('Inside searchApt ' +aptID)
      return this.http.get(`./api/apartments/search/${aptID}`).map((res: Response) => res.json());
    //   return new Promise((resolve,reject)=> {
    //      this.http.get(`./api/apartments/search/${aptID}`)
    //         .map((res: Response) => res.json()).subscribe(data => {resolve(data)}, error => reject(error));
    //  console.log(resolve);
        //   });  
    }
}