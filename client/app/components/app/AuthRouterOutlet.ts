import {Directive, DynamicComponentLoader, ElementRef} from "angular2/core";
import {AuthService} from '../../services/AuthService'
import {Router, RouterOutlet, ComponentInstruction} from "angular2/router";

@Directive({
    selector: 'auth-router-outlet'
})
export class AuthRouterOutlet extends RouterOutlet {
    private _protectedRoutes = {
        'app/**': true,
        'app/home': true,
        'app/dashboard': true,
        'app/about': false
    };

    constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader, private _router: Router, nameAttr: string, private _authService: AuthService) {
        super(_elementRef, _loader, _router, nameAttr);
    }

    activate(nextInstruction: ComponentInstruction): Promise<any> {
        if (this._protectedRoutes[nextInstruction.urlPath]) {        
            if (!this._authService.loggedIn()) {
                this._router.navigate(['Login']);
            }
        }

        return super.activate(nextInstruction);
    }
}