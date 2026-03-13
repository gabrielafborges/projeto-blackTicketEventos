import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedUserDataComponent } from './authenticated-user-data.component';

describe('AuthenticatedUserDataComponent', () => {
  let component: AuthenticatedUserDataComponent;
  let fixture: ComponentFixture<AuthenticatedUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticatedUserDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticatedUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
