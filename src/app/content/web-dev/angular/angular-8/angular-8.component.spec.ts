import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular8Component } from './angular-8.component';

describe('Angular8Component', () => {
  let component: Angular8Component;
  let fixture: ComponentFixture<Angular8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Angular8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
