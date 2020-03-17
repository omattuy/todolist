import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../services/AuthenticationService';
import { DataTransferService } from '../services/DataTransferService';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.page.html',
  styleUrls: ['./login-logout.page.scss'],
})
export class LoginLogoutPage implements OnInit {

  user: User = {email: "", password: ""};
  new_user: boolean;

  constructor (public authService: AuthenticationService, public crud: DataTransferService, public router: Router) {
    this.authService.isLoggedIn().subscribe(user => {
      if (user) {
        this.router.navigate(["/todo-list"]);
      } else {
        this.crud.clearDataOnLogOut();
        this.new_user = true;
      }
    })
  }

  ngOnInit() { }

  userIsNew() {
    this.new_user = true;
  }

  userIsNotNew() {
    this.new_user = false;
  }

  register() {
    this.authService.register(this.user.email, this.user.password);
    this.user.email = ''; 
    this.user.password = '';
  }

  login() {
    this.authService.login(this.user.email, this.user.password);
    this.user.email = ''; 
    this.user.password = '';
  }

}
