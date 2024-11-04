import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NewExpensesComponent } from './views/expenses/new-expenses/new-expenses.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'expenses',
    component: NewExpensesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
