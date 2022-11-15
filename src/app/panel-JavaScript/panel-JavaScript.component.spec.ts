import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelJavaScriptComponent } from './panel-JavaScript.component';

describe('PanelJavaScriptComponent', () => {
  let component: PanelJavaScriptComponent;
  let fixture: ComponentFixture<PanelJavaScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelJavaScriptComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelJavaScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
