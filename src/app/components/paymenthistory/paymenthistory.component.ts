import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './paymenthistory.component.html',
  styleUrls: ['./paymenthistory.component.scss']
})
export class PaymentHistoryComponent {

  paymentHistory = [
    {
      recordNumber: 1,
      beneficiary: 'Aero Consultants',
      beneficiaryAccountNumber: '321987654000',
      amount: 500.0,
      status: 'success',
      reference: 'Payment For Consulting services',
      reasonCode: 'Payment Successful',
      createdAt: '2021-05-28 15:06:39.0'
    },
    {
      recordNumber: 2,
      beneficiary: 'Olive Oil Suppliers',
      beneficiaryAccountNumber: '465987654000',
      amount: 1100.0,
      status: 'failed',
      reference: 'New Olive Oil Stock',
      reasonCode: 'insufficient funds',
      createdAt: '2021-05-28 15:08:02.0'
    }
  ];

}
