import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TittaPage } from './titta.page';

describe('TittaPage', () => {
  let component: TittaPage;
  let fixture: ComponentFixture<TittaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TittaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TittaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
