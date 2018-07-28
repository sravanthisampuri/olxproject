import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { SubmitAddService } from "./submitAdd.service"

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private submitAd: SubmitAddService,
        private router: Router) { }
    canActivate(): boolean {

        if (this.submitAd.submitAddget()) {
            return true;
        }
        else {
            this.router.navigate(['/login'])
            return false;
        }

    }

}