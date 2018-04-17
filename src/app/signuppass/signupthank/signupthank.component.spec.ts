import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupthankComponent } from './signupthank.component';

describe('SignupthankComponent', () => {
  let component: SignupthankComponent;
  let fixture: ComponentFixture<SignupthankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupthankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupthankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
