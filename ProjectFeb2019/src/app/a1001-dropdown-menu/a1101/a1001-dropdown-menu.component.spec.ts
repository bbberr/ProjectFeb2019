import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A1001DropdownMenuComponent } from './a1001-dropdown-menu.component';

describe('A1001DropdownMenuComponent', () => {
  let component: A1001DropdownMenuComponent;
  let fixture: ComponentFixture<A1001DropdownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A1001DropdownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A1001DropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
