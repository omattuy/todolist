import {Injectable} from '@angular/core';
import { AuthenticationService } from '../services/AuthenticationService';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, public authService: AuthenticationService) {}

    async checkUserIsLoggedIn() {
        const user = await this.authService.isLoggedIn();
        if (user) {
            return true;
        } else {
            return false;
        }
    }

    async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userIsLoggedIn = await this.checkUserIsLoggedIn();
        if (userIsLoggedIn == false) {
            this.router.navigate([""]);
            return false;
        }
        return true;
    }

}