// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboardui',
//   imports: [],
//   templateUrl: './dashboardui.component.html',
//   styleUrl: './dashboardui.component.scss'
// })
// export class DashboarduiComponent {

// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';   // <<< ✅ import this
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,   // <<< ✅ tell Angular this is a standalone component
  imports: [FormsModule,RouterLink],  // <<< ✅ add FormsModule here
  templateUrl: './dashboardui.component.html',
  styleUrls: ['./dashboardui.component.scss']
})
export class DashboarduiComponent {

  showCanvas = false;

  account = {
    name: '',
    type: '',
    deposit: null
  };

  toggleCanvas() {
    this.showCanvas = !this.showCanvas;
  }

  submitAccountForm() {
    if (this.account.name && this.account.type && this.account.deposit != null) {
      console.log('Account Created:', this.account);

      // Close the offcanvas
      this.toggleCanvas();

      // Reset the form
      this.account = { name: '', type: '', deposit: null };
    }
  }
}
