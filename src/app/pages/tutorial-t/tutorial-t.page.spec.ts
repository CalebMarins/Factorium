import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialTPage } from './tutorial-t.page';

describe('TutorialTPage', () => {
  let component: TutorialTPage;
  let fixture: ComponentFixture<TutorialTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialTPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
