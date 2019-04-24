import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dia5Page } from './dia5.page';

describe('Dia5Page', () => {
  let component: Dia5Page;
  let fixture: ComponentFixture<Dia5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dia5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
