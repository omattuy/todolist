import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pomodoro-technique',
  templateUrl: './pomodoro-technique.page.html',
  styleUrls: ['./pomodoro-technique.page.scss'],
})

export class PomodoroTechniquePage implements OnInit {

  percent: number;
  radius: number = 80;
  selected_minutes: number;
  selected_date: string;
  minutes: number;
  seconds: number;
  start_icon_showing:boolean;
  stop_icon_showing: boolean;
  timer_initialized_before: boolean;

  constructor(public alertController: AlertController) {
    this.percent = 0;
    this.minutes = 0;
    this.seconds = 60;
    this.start_icon_showing = true;
    this.stop_icon_showing = false;
    this.timer_initialized_before = false;
  }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Select the number of minutes before starting the timer',
      buttons: ['OK']
    });
    await alert.present();
  }

  startAndStopPomodoro() {
    if (this.selected_date == undefined) {
      this.presentAlert();
    } else {
      this.start_icon_showing = !this.start_icon_showing;
      this.stop_icon_showing = !this.stop_icon_showing;
      this.getSelectedNumberMinutes();
      if (this.timer_initialized_before == false) {
        this.minutes = this.selected_minutes - 1;
        setInterval(this.decreaseOneMinute.bind(this), 60000);
        setInterval(this.decreaseSeconds.bind(this), 1000);
      }
      this.timer_initialized_before = true;
    }
  }

  decreaseOneMinute() {
    if (this.start_icon_showing == false) {
      this.percent = this.percent + (100 / this.getSelectedNumberMinutes());
      this.minutes = this.minutes - 1;
    }
    //console.log("(Minutes) " + this.minutes);
  }

  decreaseSeconds() {
    if (this.start_icon_showing == false) {
      this.seconds = this.seconds - 1;
      if (this.seconds == 0) {
        this.seconds = 60;
      }
    }
    //console.log("(Seconds) " + this.seconds);
  }

  getSelectedNumberMinutes() {
    return this.selected_minutes = Number(this.selected_date.slice(this.selected_date.indexOf("T") + 4, this.selected_date.indexOf("T") + 6));
  }

}
