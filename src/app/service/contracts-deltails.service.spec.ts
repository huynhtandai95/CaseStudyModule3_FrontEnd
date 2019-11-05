import { TestBed } from '@angular/core/testing';

import { ServicesDeltailsService } from './contracts-deltails.service';

describe('ServicesDeltailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesDeltailsService = TestBed.get(ServicesDeltailsService);
    expect(service).toBeTruthy();
  });
});
