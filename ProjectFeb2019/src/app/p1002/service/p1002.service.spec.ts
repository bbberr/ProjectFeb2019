import { TestBed } from '@angular/core/testing';

import { P1002Service } from './p1002.service';

describe('P1002Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: P1002Service = TestBed.get(P1002Service);
    expect(service).toBeTruthy();
  });
});
