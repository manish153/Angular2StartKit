///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}    from 'angular2/platform/browser'
import {provide}    from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'
import {ROUTER_BINDINGS, ROUTER_PROVIDERS} from 'angular2/router'
import {LocationStrategy, PathLocationStrategy} from 'angular2/platform/common'
import {HTTP_PROVIDERS} from 'angular2/http'
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

