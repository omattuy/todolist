import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PomodoroTechniquePage } from './pomodoro-technique.page';

describe('PomodoroTechniquePage', () => {
  let component: PomodoroTechniquePage;
  let fixture: ComponentFixture<PomodoroTechniquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroTechniquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PomodoroTechniquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
