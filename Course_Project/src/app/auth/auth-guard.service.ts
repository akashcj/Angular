import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService) {}

    canActivate(routeSnapshot:ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }
}