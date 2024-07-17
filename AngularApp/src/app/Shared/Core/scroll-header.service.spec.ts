import { TestBed } from '@angular/core/testing';

import { ScrollHeaderService } from './scroll-header.service';

describe('ScrollHeaderService', () => {
  let service: ScrollHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
