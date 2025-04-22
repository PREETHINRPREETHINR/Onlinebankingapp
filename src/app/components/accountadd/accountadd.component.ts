import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accountadd',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './accountadd.component.html',
  styleUrls: ['./accountadd.component.scss']
})
export class AccountaddComponent {

  accountAddedSuccess: boolean = true;

  // List of accounts
  accounts = [
    { name: 'Olive Distributors' },
    { name: 'Sams Bakery' },
    { name: 'Quick Foods' }
  ];

  selectedAccount: string = this.accounts.length > 0 ? this.accounts[0].name : '';
  totalBalance: number = 700.00;

  // For toggling transact offcanvas
  isTransactOpen: boolean = false;

  // Transaction fields
  selectedTransactionType: string = '';

  transferFrom: string = this.selectedAccount;
  transferTo: string = '';
  transferAmount: number | null = null;
  payeeName: string = '';

  // Toggle transact offcanvas
  toggleTransact(): void {
    this.isTransactOpen = !this.isTransactOpen;
  }

  makeTransfer(): void {
    if (!this.transferFrom || !this.transferTo || !this.transferAmount) {
      alert("⚠️ Please fill all fields for Transfer.");
      return;
    }

    if (this.transferFrom === this.transferTo) {
      alert("⚠️ 'Transfer From' and 'Transfer To' must be different accounts.");
      return;
    }

    console.log(`✅ Transferred ₹${this.transferAmount} from ${this.transferFrom} to ${this.transferTo}`);
    this.resetTransaction();
  }

  makePayment(): void {
    if (!this.transferFrom || !this.payeeName || !this.transferAmount) {
      alert("⚠️ Please fill all fields for Payment.");
      return;
    }

    console.log(`✅ Payment of ₹${this.transferAmount} made from ${this.transferFrom} to ${this.payeeName}`);
    this.resetTransaction();
  }

  makeDeposit(): void {
    if (!this.transferTo || !this.transferAmount) {
      alert("⚠️ Please fill all fields for Deposit.");
      return;
    }

    console.log(`✅ Deposited ₹${this.transferAmount} to ${this.transferTo}`);
    this.resetTransaction();
  }

  makeWithdraw(): void {
    if (!this.transferFrom || !this.transferAmount) {
      alert("⚠️ Please fill all fields for Withdrawal.");
      return;
    }

    console.log(`✅ Withdrawn ₹${this.transferAmount} from ${this.transferFrom}`);
    this.resetTransaction();
  }

  resetTransaction(): void {
    this.transferAmount = null;
    this.transferFrom = this.selectedAccount;
    this.transferTo = '';
    this.payeeName = '';
    this.selectedTransactionType = '';
    this.isTransactOpen = false;
  }
}
