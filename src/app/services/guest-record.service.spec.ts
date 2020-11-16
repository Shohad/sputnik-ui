import { TestBed } from '@angular/core/testing';

import { GuestRecordService } from './guest-record.service';

describe('GuestRecordService', () => {
  let service: GuestRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
