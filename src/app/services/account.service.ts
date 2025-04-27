import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Define the API URL
  private apiUrl = 'http://localhost:9001/api/accounts';

  constructor(private http: HttpClient) { }

  // Method to fetch account details (or other data)
  getAccounts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/accounts`);
  }

  // Method to fetch payment history
  getPaymentHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/paymenthistory`);
  }

  // Method to fetch transaction history
  getTransactionHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/transactionhistory`);
  }
}

