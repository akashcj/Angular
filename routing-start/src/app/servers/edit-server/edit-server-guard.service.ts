import { Observable } from "rxjs/Observable";
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanDeactivate } from "@angular/router";

export interface CanComponentDeactivateInterface{
    canDeactivate():Promise<boolean>|Observable<boolean>|boolean;
}

export class EditServerGuard implements CanDeactivate<CanComponentDeactivateInterface>{

    canDeactivate(  component:CanComponentDeactivateInterface,
                    currentRoute: ActivatedRouteSnapshot,
                    currentState: RouterStateSnapshot,
                    nextState?: RouterStateSnapshot ):Promise<boolean>| Observable<boolean>| boolean{
        return component.canDeactivate();
    }
}