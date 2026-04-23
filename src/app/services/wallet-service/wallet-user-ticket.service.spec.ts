import { TestBed } from '@angular/core/testing';

import { WalletUserTicketService } from './wallet-user-ticket.service';

describe('WalletUserTicketService', () => {
  let service: WalletUserTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletUserTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
