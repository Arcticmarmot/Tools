import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScaleComponent } from './scale.component';

describe('ScaleComponent', () => {
  let component: ScaleComponent;
  let fixture: ComponentFixture<ScaleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
