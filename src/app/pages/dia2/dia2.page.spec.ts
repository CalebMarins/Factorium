import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dia2Page } from './dia2.page';

describe('Dia2Page', () => {
  let component: Dia2Page;
  let fixture: ComponentFixture<Dia2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dia2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
