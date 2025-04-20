// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {

// }


import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email && this.password) {
      this.router.navigate(['/dashboardui']);
    } else {
      alert('Please fill Email and Password');
    }
  }
}

