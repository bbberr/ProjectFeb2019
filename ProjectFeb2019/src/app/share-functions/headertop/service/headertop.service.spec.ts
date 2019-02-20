import { TestBed } from '@angular/core/testing';

import { HeadertopService } from './headertop.service';

describe('HeadertopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeadertopService = TestBed.get(HeadertopService);
    expect(service).toBeTruthy();
  });
});
