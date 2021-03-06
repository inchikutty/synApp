import { Injectable } from '@angular/core';
import {Post} from './post';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class ExtPostService {
    constructor(private http: Http) {
    }

    getData(): Observable<Post[]> {
        return this.http.get('http://54.200.147.89/index.php/api/extevents')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
