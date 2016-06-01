import { bootstrap } from "@angular/platform-browser-dynamic";
import { AppComponent } from "./components/app/app";
import { MODAL_BROWSER_PROVIDERS } from "angular2-modal/platform-browser";
import { ROUTER_PROVIDERS } from "@angular/router";

bootstrap(AppComponent, [ ROUTER_PROVIDERS, MODAL_BROWSER_PROVIDERS ]);
