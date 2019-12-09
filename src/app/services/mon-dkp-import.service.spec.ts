import { TestBed } from '@angular/core/testing';

import { MonDkpImportService } from './mon-dkp-import.service';

describe('MonDkpImportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonDkpImportService = TestBed.get(MonDkpImportService);
    expect(service).toBeTruthy();
  });
});
