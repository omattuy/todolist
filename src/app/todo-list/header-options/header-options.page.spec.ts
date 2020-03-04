import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderOptionsPage } from './header-options.page';

describe('HeaderOptionsPage', () => {
  let component: HeaderOptionsPage;
  let fixture: ComponentFixture<HeaderOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
