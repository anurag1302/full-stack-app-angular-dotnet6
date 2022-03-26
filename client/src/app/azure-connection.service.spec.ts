import { TestBed } from '@angular/core/testing';

import { AzureConnectionService } from './azure-connection.service';

describe('AzureConnectionService', () => {
  let service: AzureConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
