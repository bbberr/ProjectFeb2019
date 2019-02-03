import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P1001Component } from './p1001.component';

describe('P1001Component', () => {
  let component: P1001Component;
  let fixture: ComponentFixture<P1001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P1001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
