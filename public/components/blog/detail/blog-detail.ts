import { Component } from "@angular/core";
import { Router, RouteSegment, OnActivate } from "@angular/router";
import { BlogService } from "../../../services/blog.service";

@Component({
    selector: "blog-detail",
    templateUrl: "components/blog/detail/blog-detail.html",
    providers: [ BlogService ]
})

export class BlogDetail implements OnActivate {
    blogDetail: any
    constructor(private blogService: BlogService, private router: Router) {}
    routerOnActivate(current: RouteSegment) {
        let id = current.getParam("htmlFile");
        this.blogService.getBlog(id).
            then((blogDetail) => {
                this.blogDetail = blogDetail;
            });
    }
}
