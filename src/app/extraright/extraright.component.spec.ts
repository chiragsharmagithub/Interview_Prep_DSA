import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrarightComponent } from './extraright.component';

describe('ExtrarightComponent', () => {
  let component: ExtrarightComponent;
  let fixture: ComponentFixture<ExtrarightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtrarightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtrarightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
