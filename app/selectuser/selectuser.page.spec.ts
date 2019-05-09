import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectuserPage } from './selectuser.page';

describe('SelectuserPage', () => {
  let component: SelectuserPage;
  let fixture: ComponentFixture<SelectuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectuserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
