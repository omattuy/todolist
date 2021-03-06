import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from "firebase/app";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

    userId: string;

    constructor(public afAuth: AngularFireAuth, public router: Router) { }

    // E-MAIL & PASSWORD AUTHENTICATION
    async register(email:string, password: string) {
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

    isLoggedIn(): Observable<any> {
        return this.afAuth.authState;
    }

    getUser(): Promise<any> {
        return this.afAuth.authState.pipe(first()).toPromise();
    }

    // FACEBOOK AUTHENTICATION
    FacebookAuth() {
        return this.AuthLoginFacebbok(new auth.FacebookAuthProvider());
    }

    AuthLoginFacebbok(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
        .then((result) => {
            this.router.navigate(["/todo-list"]);
            console.log('You have been successfully logged in!');
        }).catch((error) => {
            console.log(error)
        })
    }

    // GOOGLE AUTHENTICATION
    GoogleAuth() {
        return this.AuthLoginGoogle(new auth.GoogleAuthProvider());
    }

    AuthLoginGoogle(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
        .then((result) => {
            this.router.navigate(["/todo-list"]);
            console.log('You have been successfully logged in!')
        }).catch((error) => {
            console.log(error)
        })
    }

}