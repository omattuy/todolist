import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-single-task-modal',
  templateUrl: './single-task-modal.component.html',
  styleUrls: ['./single-task-modal.component.scss'],
})
export class SingleTaskModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  closeTask() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
