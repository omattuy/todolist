import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

    constructor(public afAuth: AngularFireAuth, public router: Router) {}

    async createAccount(email:string, password: string) {
        await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.router.navigate(["/todo-list"]);
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }

    async login(email:string, password: string) {
        await this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.router.navigate(["/todo-list"]);
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }

    async logout() {
        await this.afAuth.auth.signOut();
    }

    isLoggedIn() {
        console.log("debug (2)");
        return this.afAuth.authState.pipe(first()).toPromise();
    }

}