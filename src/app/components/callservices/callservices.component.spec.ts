import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallservicesComponent } from './callservices.component';

describe('CallservicesComponent', () => {
  let component: CallservicesComponent;
  let fixture: ComponentFixture<CallservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
