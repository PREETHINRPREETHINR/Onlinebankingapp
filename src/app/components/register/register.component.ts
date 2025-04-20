import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private location: Location) {} // <-- Inject Location

  goBack() {
    this.location.back(); // <-- Go to previous page
  }

}
