import { TestBed } from '@angular/core/testing';

import { ChefParcService } from './chef-parc.service';

describe('ChefParcService', () => {
  let service: ChefParcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefParcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
