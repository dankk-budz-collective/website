import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkpComponent } from './dkp.component';

describe('DkpComponent', () => {
  let component: DkpComponent;
  let fixture: ComponentFixture<DkpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
