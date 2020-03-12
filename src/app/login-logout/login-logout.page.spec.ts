import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginLogoutPage } from './login-logout.page';

describe('LoginLogoutPage', () => {
  let component: LoginLogoutPage;
  let fixture: ComponentFixture<LoginLogoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLogoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginLogoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
