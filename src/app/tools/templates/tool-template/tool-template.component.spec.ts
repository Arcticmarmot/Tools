import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTemplateComponent } from './tool-template.component';

describe('ToolTemplateComponent', () => {
  let component: ToolTemplateComponent;
  let fixture: ComponentFixture<ToolTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
