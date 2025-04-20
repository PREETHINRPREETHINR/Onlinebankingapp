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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accountadd',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './accountadd.component.html',
  styleUrls: ['./accountadd.component.scss']
})
export class AccountaddComponent {

  accountAddedSuccess: boolean = true;

  accounts = [
    { name: 'Olive Distributers' },
    { name: 'Sams Bakery' },            // ✅ Added more accounts for demo
    { name: 'Quick Foods' }
  ];

  selectedAccount: string = this.accounts[0]?.name || '';
  totalBalance: number = 700.00;

  // ✅ For off-canvas toggle and form values
  showCanvas: boolean = false;
  transferFrom: string = this.accounts[0]?.name || '';
  transferTo: string = '';
  transferAmount: number | null = null;

  toggleCanvas() {
    this.showCanvas = !this.showCanvas;
  }

  onTransact() {
    this.toggleCanvas(); // ✅ Show the canvas when Transact button is clicked
  }

  makeTransfer() {
    if (!this.transferFrom || !this.transferTo || !this.transferAmount) {
      alert("Please fill out all fields.");
      return;
    }

    if (this.transferFrom === this.transferTo) {
      alert("Transfer From and To must be different.");
      return;
    }

    // Your real transfer logic can go here
    console.log(`✅ Transfer ₹${this.transferAmount} from ${this.transferFrom} to ${this.transferTo}`);

    // Reset and close the canvas
    this.transferAmount = null;
    this.transferTo = '';
    this.toggleCanvas();
  }
}

