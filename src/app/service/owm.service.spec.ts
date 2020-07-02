import { TestBed } from '@angular/core/testing';

import { OWMService } from './owm.service';

describe('OWMService', () => {
  let service: OWMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OWMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
