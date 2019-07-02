import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugardoisPage } from './lugardois.page';

describe('LugardoisPage', () => {
  let component: LugardoisPage;
  let fixture: ComponentFixture<LugardoisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugardoisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugardoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
