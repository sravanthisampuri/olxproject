import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAdComponent } from './submit-ad.component';

describe('SubmitAdComponent', () => {
  let component: SubmitAdComponent;
  let fixture: ComponentFixture<SubmitAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
