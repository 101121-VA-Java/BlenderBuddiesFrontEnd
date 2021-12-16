import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrFormComponent } from './ingr-form.component';

describe('IngrFormComponent', () => {
  let component: IngrFormComponent;
  let fixture: ComponentFixture<IngrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngrFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
