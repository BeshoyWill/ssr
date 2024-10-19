import { TestBed } from '@angular/core/testing';

import { PlatformserviceService } from './platformservice.service';

describe('PlatformserviceService', () => {
  let service: PlatformserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
