import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDriverPage } from './register-driver.page';

describe('RegisterDriverPage', () => {
  let component: RegisterDriverPage;
  let fixture: ComponentFixture<RegisterDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDriverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
