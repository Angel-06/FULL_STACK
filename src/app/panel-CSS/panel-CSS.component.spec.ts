import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCSSComponent } from './panel-CSS.component';

describe('PanelCSSComponent', () => {
  let component: PanelCSSComponent;
  let fixture: ComponentFixture<PanelCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelCSSComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
