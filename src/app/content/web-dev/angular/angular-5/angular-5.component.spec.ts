import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular5Component } from './angular-5.component';

describe('Angular5Component', () => {
  let component: Angular5Component;
  let fixture: ComponentFixture<Angular5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Angular5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
