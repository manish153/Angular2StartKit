import {Http, Response} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map';

@Injectable()
export class ApartmentService {

    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    getEntries() {
        return this.http.get('./api/apartments').map((res: Response) => res.json());
    }

    getProfile(userEmail :string){
       return this.http.get(`./api/apartments/getprofile/${userEmail}`).map((res: Response) => res.json());
    } 
}