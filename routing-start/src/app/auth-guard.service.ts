import { CanActivate, 
    RouterStateSnapshot, 
    ActivatedRouteSnapshot, 
    Router, 
    CanActivateChild } from "../../node_modules/@angular/router";
import {Observable} from 'rxjs';
import { Injectable } from "../../node_modules/@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{

    constructor(private authService:AuthService, private router:Router){

    }

    canActivate(activatedRoute:ActivatedRouteSnapshot, routerStateSnapshot:RouterStateSnapshot)
        :Observable<boolean>|Promise<boolean>|boolean
    {
        return this.authService.isAuthenticated().then((loggedIn:boolean)=>{
            if (loggedIn)
            {
                return true;
            }
            else
            {
                this.router.navigate(['/']);
            }
        });
    }

    canActivateChild(activatedRoute:ActivatedRouteSnapshot, routerStateSnapshot:RouterStateSnapshot)
    : Observable<boolean>|Promise<boolean>|boolean
    {
        return this.canActivate(activatedRoute, routerStateSnapshot);
    }
}