import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-header-options',
  templateUrl: './header-options.page.html',
  styleUrls: ['./header-options.page.scss'],
})
export class HeaderOptionsPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async dismissPopOver() {
    await this.popoverController.dismiss();
  }

}
