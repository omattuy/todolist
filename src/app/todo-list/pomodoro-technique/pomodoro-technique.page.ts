import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro-technique',
  templateUrl: './pomodoro-technique.page.html',
  styleUrls: ['./pomodoro-technique.page.scss'],
})

export class PomodoroTechniquePage implements OnInit {

  percent: number;
  radius: number = 90;
  current_minute: number;

  constructor() {
    this.percent = 0;
    this.current_minute = 0;
  }

  ngOnInit() { }

  increaseOneMinute() {
    this.percent = this.percent + 1;
  }

  startPomodoro() {
    setInterval(this.increaseOneMinute.bind(this), 1000);
  }

}
