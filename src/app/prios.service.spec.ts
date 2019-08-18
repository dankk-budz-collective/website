import { TestBed } from '@angular/core/testing';

import { PriosService } from './prios.service';

describe('PriosService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: PriosService = TestBed.get(PriosService);
		expect(service).toBeTruthy();
	});
});
