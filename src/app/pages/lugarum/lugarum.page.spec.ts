import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarumPage } from './lugarum.page';

describe('LugarumPage', () => {
  let component: LugarumPage;
  let fixture: ComponentFixture<LugarumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
