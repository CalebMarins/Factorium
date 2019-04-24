import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dia1Page } from './dia1.page';

describe('Dia1Page', () => {
  let component: Dia1Page;
  let fixture: ComponentFixture<Dia1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dia1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
