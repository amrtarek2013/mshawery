import { TestBed } from '@angular/core/testing';

import { Translate.ServiceService } from './translate.service.service';

describe('Translate.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Translate.ServiceService = TestBed.get(Translate.ServiceService);
    expect(service).toBeTruthy();
  });
});
