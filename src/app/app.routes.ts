import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboarduiComponent } from './components/dashboardui/dashboardui.component';
import { AccountaddComponent } from './components/accountadd/accountadd.component';
import { PaymentHistoryComponent } from './components/paymenthistory/paymenthistory.component';
import { TransactionHistoryComponent } from './components/transactionhistory/transactionhistory.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';



export const routes: Routes = [
    {
        path:'register',
        component:RegisterComponent
    },

    {
        path:'login',
        component:LoginComponent
    },
    { 
        path: 'home', 
        component: HomeComponent
    },
    { 
        path: 'aboutus', 
        component: AboutusComponent
    },
    { 
        path: 'contactus', 
        component: ContactusComponent
    },
    {
        path:'dashboardui',
        component:DashboarduiComponent
    },
    {
        path:'accountadd',
        component:AccountaddComponent
    },
    {
        path:'paymenthistory',
        component:PaymentHistoryComponent
    },
    {
        path:'transactionhistory',
        component:TransactionHistoryComponent
    },
   { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    }
];