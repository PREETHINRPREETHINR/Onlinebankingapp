// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';   // <<< ✅ import this
// import { RouterLink } from '@angular/router';


// @Component({
//   selector: 'app-accountadd',
//   standalone: true, 
//   imports: [FormsModule,RouterLink],
//   templateUrl: './accountadd.component.html',
//   styleUrl: './accountadd.component.scss'
// })
// export class AccountaddComponent {
//   accountAddedSuccess: boolean = true;

//   accounts = [
//     { name: 'Olive Distributers' }
//     // You can push new accounts dynamically after creation
//   ];

//   selectedAccount: string = this.accounts[0]?.name || '';
//   totalBalance: number = 0.00;

//   showCanvas: boolean = false;

//   toggleCanvas() {
//     this.showCanvas = !this.showCanvas;
//   }

//   onTransact() {
//     // Redirect to transaction page
//     console.log('Start transaction for', this.selectedAccount);
//     // You can use router.navigate here
//   }

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // <<< ✅ Add this
import { FormsModule } from '@angular/forms';      // <<< ✅ Already correct
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accountadd',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],   // <<< ✅ Add CommonModule here
  templateUrl: './accountadd.component.html',
  styleUrls: ['./accountadd.component.scss']           // <<< ✅ fix typo 'styleUrl' to 'styleUrls'
})
export class AccountaddComponent {

  accountAddedSuccess: boolean = true;

  accounts = [
    { name: 'Olive Distributers' }
    // You can push new accounts dynamically after creation
  ];

  selectedAccount: string = this.accounts[0]?.name || '';
  totalBalance: number = 0.00;

  showCanvas: boolean = false;

  toggleCanvas() {
    this.showCanvas = !this.showCanvas;
  }

  onTransact() {
    console.log('Start transaction for', this.selectedAccount);
    // future navigation logic here
  }

}
