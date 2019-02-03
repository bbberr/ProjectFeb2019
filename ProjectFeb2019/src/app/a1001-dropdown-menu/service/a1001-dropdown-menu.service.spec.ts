import { TestBed } from '@angular/core/testing';

import { A1001DropdownMenuService } from './a1001-dropdown-menu.service';

describe('A1001DropdownMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: A1001DropdownMenuService = TestBed.get(A1001DropdownMenuService);
    expect(service).toBeTruthy();
  });
});
