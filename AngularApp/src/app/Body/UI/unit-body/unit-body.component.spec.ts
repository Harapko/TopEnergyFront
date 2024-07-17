import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitBodyComponent } from './unit-body.component';

describe('UnitBodyComponent', () => {
  let component: UnitBodyComponent;
  let fixture: ComponentFixture<UnitBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
