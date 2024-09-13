import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular4Component } from './angular-4.component';

describe('Angular4Component', () => {
  let component: Angular4Component;
  let fixture: ComponentFixture<Angular4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Angular4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
