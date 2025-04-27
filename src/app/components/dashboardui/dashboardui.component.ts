import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './dashboardui.component.html',
  styleUrls: ['./dashboardui.component.scss']
})
export class DashboarduiComponent {

  showCanvas = false;

  account = {
    name: '',
    gender: '',
    dob: '',
    phone: '',
    type: '',
    deposit: null
  };

  accountsList: any[] = [];

  // ✅ Inject services using inject() function (Angular 15+ style)
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);

  constructor() {
    // Read query params
    this.route.queryParams.subscribe(params => {
      if (params['openCanvas']) {
        this.showCanvas = true;
      }
    });

    // Fetch existing accounts on load
    this.getAllAccounts();
  }

  toggleCanvas() {
    this.showCanvas = !this.showCanvas;
  }

  submitAccountForm() {
    if (this.account.name && this.account.gender && this.account.dob && this.account.phone && this.account.type && this.account.deposit != null) {
      console.log('Submitting account:', this.account);

      const newAccount = {
        userId: 1, // Static userId for now
        name: this.account.name,
        gender: this.account.gender,
        dob: this.account.dob,
        phone: this.account.phone,
        type: this.account.type,
        balance: this.account.deposit,
        createdAt: new Date()
      };

      this.http.post('http://localhost:9001/api/accounts', newAccount)
        .subscribe(
          (response: any) => {
            console.log('✅ Account Created:', response);
            this.accountsList.push(response);
            this.toggleCanvas();
            this.resetForm();
          },
          (error) => {
            console.error('❌ Error:', error);
            alert('Failed to create account.');
          }
        );
    } else {
      alert('Please fill all fields correctly.');
    }
  }

  resetForm() {
    this.account = {
      name: '',
      gender: '',
      dob: '',
      phone: '',
      type: '',
      deposit: null
    };
  }

  getAllAccounts() {
    this.http.get<any[]>('http://localhost:9001/api/accounts')
      .subscribe(
        (data) => {
          this.accountsList = data;
          console.log('✅ Accounts Loaded:', this.accountsList);
        },
        (error) => {
          console.error('❌ Error fetching accounts:', error);
        }
      );
  }
}
