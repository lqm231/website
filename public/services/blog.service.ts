import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Config } from '../config';

@Injectable()
export class BlogService {
    private requestOptions: RequestOptions;
    private config = Config;
    constructor(private http: Http) {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // this.requestOptions = new RequestOptions({ headers: headers });
    }
    getBlog(htmlFile) {
        var self = this;
        return this.http.get(self.config.apiURI + "/blog/detail/" + htmlFile)
            .toPromise()
            .then(self.extractData)
            .catch(self.handleError);
    }

    private extractData(res: Response) {
        // let body = res.json();
        let body = res.text();
        return body || "";
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        throw errMsg;
    }
}
