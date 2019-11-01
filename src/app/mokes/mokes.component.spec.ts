import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MokesComponent } from './mokes.component';

describe('MokesComponent', () => {
  let component: MokesComponent;
  let fixture: ComponentFixture<MokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
