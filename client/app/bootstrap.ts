import {bootstrap}    from 'angular2/platform/browser'
import {provide}    from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'
import {ROUTER_BINDINGS, ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http'
import {AuthService} from './services/AuthService'

import {AppComponent} from './components/app/AppComponent'

bootstrap(AppComponent, [
    AuthService,
    ROUTER_PROVIDERS,
    CORE_DIRECTIVES,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy})
]);

