import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    private token:string;

    constructor(private routerService:Router) {}

    SignupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            error => console.log(error)
        );
        this.getToken();
    }

    SigninUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            (response) => {
                console.log("Sign in response"); console.log(response);
                this.getToken();
                this.routerService.navigate(['/recipes']);
            }).catch( error => {console.log("Error during signin"); console.log(error);});

    }

    getToken() {
        firebase.auth().currentUser.getIdToken().then(
            (token)=> {this.token = token;}
        );
        return this.token;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    isAuthenticated() {
        return (this.token != null);
    }


}