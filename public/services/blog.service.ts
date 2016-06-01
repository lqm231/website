import { Injectable } from "@angular/core";

@Injectable()
export class BlogService {
    getBlog(id) {
        return Promise.resolve(1);
    }
}
