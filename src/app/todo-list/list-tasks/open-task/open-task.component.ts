import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-open-task',
  templateUrl: './open-task.component.html',
  styleUrls: ['./open-task.component.scss'],
})
export class OpenTaskComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  closeTask() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
