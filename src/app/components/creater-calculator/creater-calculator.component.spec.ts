import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterCalculatorComponent } from './creater-calculator.component';

describe('CreaterCalculatorComponent', () => {
  let component: CreaterCalculatorComponent;
  let fixture: ComponentFixture<CreaterCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
