import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppComponent } from './app.component';  // Assuming you have an AppComponent
import { AccountComponent } from './account/account.component'; // Import your components
import { AccountService } from './services/account.service'; // Import your service

@NgModule({
  declarations: [
    AppComponent,    // Declare AppComponent
    AccountComponent // Declare AccountComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule  // Add HttpClientModule here
  ],
  providers: [AccountService],  // Provide your service here
  bootstrap: [AppComponent]     // Bootstrap your root component
})
export class AppModule { }
