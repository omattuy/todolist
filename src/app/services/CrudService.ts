import {Injectable} from '@angular/core';
import { AuthenticationService } from '../services/AuthenticationService';
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import 'firebase/firestore';
import { Task } from '../models/task';

@Injectable()
export class CrudService {

    db: any;
    tasks: Task[] = [];

    constructor(private router: Router, public authService: AuthenticationService) {
        this.db = firebase.firestore();
        this.getTasksFromDB();
    }

    async getTasksFromDB() {
        await this.db.collection('tasks').get().then((snapshot) =>{
            snapshot.docs.forEach(doc => {
                this.tasks.push(doc.data());
            })
        });
    }

    async checkUserIsLoggedIn() {
        const user = await this.authService.isLoggedIn();
        if (user) {
            console.log("debug1");
            return true;
        } else {
            console.log("debug2");
            return false;
        }
    }

    

}