import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTicketsComponent } from './wallet-tickets.component';

describe('WalletTicketsComponent', () => {
  let component: WalletTicketsComponent;
  let fixture: ComponentFixture<WalletTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletTicketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
