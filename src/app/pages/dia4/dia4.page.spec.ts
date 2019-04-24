import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dia4Page } from './dia4.page';

describe('Dia4Page', () => {
  let component: Dia4Page;
  let fixture: ComponentFixture<Dia4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dia4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
