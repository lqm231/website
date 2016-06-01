import { Component } from "@angular/core";
import { UserNavigation } from "../user-navigation/user-navigation"
import { Routes, ROUTER_DIRECTIVES, Router } from "@angular/router";
import { BlogDetail } from "../blog/detail/blog-detail";
import { About } from "../about/about";

@Component({
    selector: "mn-app",
    template: `
        <div id="wrapper">
            <user-nav></user-nav>
            <div><router-outlet></router-outlet></div>
        </div>
        <!-- /#wrapper -->
    `,
    directives: [ UserNavigation, ROUTER_DIRECTIVES ]
})

@Routes([
    {
        path: "detail",
        component: BlogDetail
    },
    {
        path: "about",
        component: About
    }
])

export class AppComponent {
    constructor(private router: Router) {}
}
