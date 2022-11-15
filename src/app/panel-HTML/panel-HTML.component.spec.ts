import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelHTMLComponent } from './panel-HTML.component';

describe('PanelHTMLComponent', () => {
  let component: PanelHTMLComponent;
  let fixture: ComponentFixture<PanelHTMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelHTMLComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
