import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseDetailComponent } from './lease-detail.component';

describe('LeaseDetailComponent', () => {
  let component: LeaseDetailComponent;
  let fixture: ComponentFixture<LeaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
