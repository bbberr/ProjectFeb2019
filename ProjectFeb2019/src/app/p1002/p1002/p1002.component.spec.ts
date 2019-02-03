import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P1002Component } from './p1002.component';

describe('P1002Component', () => {
  let component: P1002Component;
  let fixture: ComponentFixture<P1002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P1002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
