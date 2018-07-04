import { Injectable } from "@angular/core";
import { Router,CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGaurd implements CanActivate {

    constructor(private router:Router)
    {}
    canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot){
        return localStorage.getItem('token') ? true : false;
    }
}

