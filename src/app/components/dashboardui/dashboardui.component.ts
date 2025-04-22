// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboardui',
//   imports: [],
//   templateUrl: './dashboardui.component.html',
//   styleUrl: './dashboardui.component.scss'
// })
// export class DashboarduiComponent {

// }


import { Component, OnInit } from '@angular/core';  // <<< ✅ import OnInit here
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
export class DashboarduiComponent implements OnInit {  // <<< ✅ implements OnInit here

  showCanvas = false;

  account = {
    name: '',
    type: '',
    deposit: null
  };

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
    if (this.account.name && this.account.type && this.account.deposit != null) {
      console.log('Account Created:', this.account);

      this.toggleCanvas();
      this.account = { name: '', type: '', deposit: null };
    }
  }
}
