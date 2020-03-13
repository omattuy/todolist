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
  minutes_interval: any;
  seconds_interval: any;
  last_sixty_seconds_interval: any;

  constructor(public alertController: AlertController) {
    this.percent = 0;
    this.minutes = 0;
    this.seconds = 60;
    this.start_icon_showing = true;
    this.stop_icon_showing = false;
    this.timer_initialized_before = false;
  }

  ngOnInit() { }

  getSelectedNumberMinutes() {
    return this.selected_minutes = Number(this.selected_date.slice(this.selected_date.indexOf("T") + 4, this.selected_date.indexOf("T") + 6));
  }

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
        this.minutes_interval = setInterval(this.decreaseOneMinute.bind(this), 60000);
        this.seconds_interval = setInterval(this.decreaseSixtySeconds.bind(this), 1000);
      }
      this.timer_initialized_before = true;
    }
  }

  decreaseOneMinute() {
    console.log(this.minutes_interval);
    if (this.start_icon_showing == false) {
      this.percent = this.percent + (100 / this.selected_minutes);
      this.minutes = this.minutes - 1;
      if (this.minutes == 0) {
        clearInterval(this.minutes_interval);
      }
    }
    //console.log("(Minutes) " + this.minutes);
  }

  decreaseSixtySeconds() {
    console.log(this.seconds_interval);
    if (this.start_icon_showing == false) {
      this.seconds = this.seconds - 1;
      if (this.seconds == 0) {
        if (this.minutes > 0) {
          this.seconds = 60;
        } else if (this.minutes == 0) {
          this.seconds = 60;
          clearInterval(this.seconds_interval);
          this.last_sixty_seconds_interval = setInterval(this.decreaseLastSixtySeconds.bind(this), 1000);
        }
      }
    }
    //console.log("(Seconds) " + this.seconds);
  }

  decreaseLastSixtySeconds() {
    if (this.start_icon_showing == false) {
      this.seconds = this.seconds - 1;
      if (this.seconds == 0) {
        this.percent = this.percent + (100 / this.selected_minutes);
        clearInterval(this.last_sixty_seconds_interval);
      }
    }
  }

}
