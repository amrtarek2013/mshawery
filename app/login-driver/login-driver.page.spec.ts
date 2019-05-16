import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDriverPage } from './login-driver.page';

describe('LoginDriverPage', () => {
  let component: LoginDriverPage;
  let fixture: ComponentFixture<LoginDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDriverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
