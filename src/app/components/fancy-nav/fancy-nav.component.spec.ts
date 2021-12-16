import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyNavComponent } from './fancy-nav.component';

describe('FancyNavComponent', () => {
  let component: FancyNavComponent;
  let fixture: ComponentFixture<FancyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
