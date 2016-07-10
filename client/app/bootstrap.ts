//<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}    from '@angular/platform-browser-dynamic'
import {provide}    from '@angular/core'
import {CORE_DIRECTIVES} from '@angular/common'
import {ROUTER_BINDINGS, ROUTER_PROVIDERS} from '@angular/router-deprecated'
import {LocationStrategy, PathLocationStrategy} from '@angular/common'
import {HTTP_PROVIDERS} from '@angular/http'
import {AuthService} from './services/AuthService'
import {ApartmentService} from './components/apartment/ApartmentService'
import {AppComponent} from './components/app/AppComponent'
import {SharedService} from './services/SharedService'

bootstrap(AppComponent, [
    AuthService,
    SharedService,
    ApartmentService,
    ROUTER_PROVIDERS,
    CORE_DIRECTIVES,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy})
]);

