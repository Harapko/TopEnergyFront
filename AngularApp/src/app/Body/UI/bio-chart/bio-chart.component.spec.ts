import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioChartComponent } from './bio-chart.component';

describe('BioChartComponent', () => {
  let component: BioChartComponent;
  let fixture: ComponentFixture<BioChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BioChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
