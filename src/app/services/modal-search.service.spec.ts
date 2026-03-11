import { TestBed } from '@angular/core/testing';

import { ModalSearchService } from './modal-search.service';

describe('ModalSearchService', () => {
  let service: ModalSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
