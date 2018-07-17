import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface ICanLeaveEditServer{
    confirmEditServerLeave():Observable<boolean>|Promise<boolean>|boolean;
}

export class CanLeaveEditServer implements CanDeactivate<ICanLeaveEditServer>{
    canDeactivate(component:ICanLeaveEditServer, 
        activatedRouteSnapshot:ActivatedRouteSnapshot, 
        currentState:RouterStateSnapshot,
        nextState?:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{

            return component.confirmEditServerLeave();

    }
}