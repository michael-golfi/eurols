import { TestBed, inject } from '@angular/core/testing';
import { ForkliftService } from './forklift.service';

describe('ForkliftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForkliftService]
    });
  });

  it('should ...', inject([ForkliftService], (service: ForkliftService) => {
    expect(service).toBeTruthy();
  }));
});
