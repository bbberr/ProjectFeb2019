import { TestBed } from '@angular/core/testing';

import { MatSelectService } from './mat-select.service';

describe('MatSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatSelectService = TestBed.get(MatSelectService);
    expect(service).toBeTruthy();
  });
});
