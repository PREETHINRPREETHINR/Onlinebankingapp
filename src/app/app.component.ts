import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboarduiComponent } from './components/dashboardui/dashboardui.component';
import { AccountaddComponent } from './components/accountadd/accountadd.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <!-- <h1>Welcome to {{title}}!</h1> -->
    <!-- <app-home/> -->
    <!-- <app-dashboard/>
    <app-accountadd/> -->
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
   title = 'Online-banking-app';
}
