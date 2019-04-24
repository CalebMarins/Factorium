import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dia3Page } from './dia3.page';

describe('Dia3Page', () => {
  let component: Dia3Page;
  let fixture: ComponentFixture<Dia3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dia3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
