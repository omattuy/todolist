import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthenticationService } from '../../services/AuthenticationService';

@Component({
  selector: 'app-header-options',
  templateUrl: './header-options.page.html',
  styleUrls: ['./header-options.page.scss'],
})
export class HeaderOptionsPage implements OnInit {

  constructor(public popoverController: PopoverController, public authService: AuthenticationService) { }

  ngOnInit() {
  }

  async dismissPopOver() {
    await this.popoverController.dismiss();
  }

  logout() {
    this.dismissPopOver();
    this.authService.logout();
  }

}
