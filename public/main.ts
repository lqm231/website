import { bootstrap } from "@angular/platform-browser-dynamic";
import { AppComponent } from "./components/app/app";
import { MODAL_BROWSER_PROVIDERS } from "angular2-modal/platform-browser";
import { ROUTER_PROVIDERS } from "@angular/router";
import { HTTP_PROVIDERS } from '@angular/http';
import './rxjs-operators';

bootstrap(AppComponent, [ ROUTER_PROVIDERS, MODAL_BROWSER_PROVIDERS, HTTP_PROVIDERS ]);
