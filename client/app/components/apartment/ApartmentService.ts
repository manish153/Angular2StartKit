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
    getEntries() {
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


    /*TASK SERVICE METHODS*/
    postTasks(data: any) {
        return this.http.post('/api/newtask',
            JSON.stringify(data), {
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
            .map((res: Response) => res.json()).subscribe();
    }

    getAllTasks() {}

    getMyTask() { }

    deleteTask() { }

    markCompleted() { }
}