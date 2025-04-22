// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboardui',
//   imports: [],
//   templateUrl: './dashboardui.component.html',
//   styleUrl: './dashboardui.component.scss'
// })
// export class DashboarduiComponent {

// }


import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './dashboardui.component.html',
  styleUrls: ['./dashboardui.component.scss']
})
export class DashboarduiComponent implements OnInit {

  showCanvas = false;

  account = {
    name: '',
    gender: '',
    dob: '',
    phone: '',
    type: '',
    deposit: null
  };

  accountsList: any[] = [];   // ✅ Store created accounts if you want to show later

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['openCanvas']) {
        this.showCanvas = true;
      }
    });
  }

  toggleCanvas() {
    this.showCanvas = !this.showCanvas;
  }

  submitAccountForm() {
    if (this.account.name && this.account.gender && this.account.dob && this.account.phone && this.account.type && this.account.deposit != null) {
      console.log('✅ Account Created:', this.account);

      // Add to accounts list
      this.accountsList.push({ ...this.account });

      this.toggleCanvas();

      // Reset form fields
      this.account = {
        name: '',
        gender: '',
        dob: '',
        phone: '',
        type: '',
        deposit: null
      };
    } else {
      alert('Please fill all the fields correctly.');
    }
  }
}
