import { TestBed } from '@angular/core/testing';

import { Citaservice } from './citaservice';

describe('Citas', () => {
  let service: Citaservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Citaservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
