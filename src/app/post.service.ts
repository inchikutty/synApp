import { Injectable } from '@angular/core';
import {Post} from './post';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
import './rxjs-operators';

@Injectable()
export class PostService {
    constructor(private http: Http) {
    }

    getData(): Observable<Post[]> {
        return this.http.get('http://54.200.147.89/index.php/api/events')
            .map(this.extractData)
            .catch(this.handleError);
    }
    getExtData(): Observable<Post[]> {
        return this.http.get('http://54.200.147.89/index.php/api/extevents')
            .map(this.extractData)
            .catch(this.handleError);
    }
    submitted(data):Observable<Post[]>{
      return this.http.post('http://54.200.147.89/index.php/api/events', data)
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
