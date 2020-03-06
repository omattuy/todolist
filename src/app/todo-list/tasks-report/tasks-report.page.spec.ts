import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasksReportPage } from './tasks-report.page';

describe('TasksReportPage', () => {
  let component: TasksReportPage;
  let fixture: ComponentFixture<TasksReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
