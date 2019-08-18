import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriosComponent } from './prios.component';

describe('PriosComponent', () => {
	let component: PriosComponent;
	let fixture: ComponentFixture<PriosComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PriosComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PriosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
