import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothieFormComponent } from './smoothie-form.component';

describe('SmoothieFormComponent', () => {
  let component: SmoothieFormComponent;
  let fixture: ComponentFixture<SmoothieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmoothieFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
