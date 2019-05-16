import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFeaturesPage } from './car-features.page';

describe('CarFeaturesPage', () => {
  let component: CarFeaturesPage;
  let fixture: ComponentFixture<CarFeaturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFeaturesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFeaturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
