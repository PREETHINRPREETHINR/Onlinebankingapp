import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // <<< ✅ this is important
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transactionhistory',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],  // <<< ✅ added CommonModule
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.scss']
})
export class TransactionHistoryComponent {
  transactions = [
    {
      id: 3,
      accountName: 'Olive Distributers',
      type: 'payment',
      amount: 1100.0,
      source: 'online',
      status: 'failed',
      reason: 'insufficient funds',
      createdAt: '2021-05-28 15:08:02.0'
    },
    {
      id: 2,
      accountName: 'Olive Distributers',
      type: 'payment',
      amount: 500.0,
      source: 'online',
      status: 'success',
      reason: 'Payment Successful',
      createdAt: '2021-05-28 15:06:39.0'
    },
    {
      id: 1,
      accountName: 'Olive Distributers',
      type: 'deposit',
      amount: 1500.0,
      source: 'online',
      status: 'success',
      reason: 'Deposit of funds successful',
      createdAt: '2021-05-28 15:05:27.0'
    }
  ];
}
