/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QueryServiceService } from './query-service.service';

describe('QueryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryServiceService]
    });
  });

  it('should ...', inject([QueryServiceService], (service: QueryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
