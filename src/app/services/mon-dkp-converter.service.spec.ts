import { TestBed } from '@angular/core/testing';

import { MonDkpConverterService } from './mon-dkp-converter.service';

describe('MonDkpConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonDkpConverterService = TestBed.get(MonDkpConverterService);
    expect(service).toBeTruthy();
  });
});
