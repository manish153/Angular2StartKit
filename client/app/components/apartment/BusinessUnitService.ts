import {Http, Response} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map';

@Injectable()
export class BusinessUnitService {

    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    getBU() {
        return this.http.get('./api/businessunits').map((res: Response) => res.json());
    }
}