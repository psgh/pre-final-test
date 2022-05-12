import { TestBed } from '@angular/core/testing';

import { GetFactService } from './get-fact.service';

describe('GetFactService', () => {
  let service: GetFactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
