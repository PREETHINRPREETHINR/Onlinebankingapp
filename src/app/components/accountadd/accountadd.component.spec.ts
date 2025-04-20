import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountaddComponent } from './accountadd.component';

describe('AccountaddComponent', () => {
  let component: AccountaddComponent;
  let fixture: ComponentFixture<AccountaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
