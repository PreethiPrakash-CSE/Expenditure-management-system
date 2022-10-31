import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { ExpenseComponent } from './expense/expense.component';
import { TargetComponent } from './target/target.component';
import { MenuComponent } from './menu/menu.component';
import { ExpenseSeverityComponent } from './expense-severity/expense-severity.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ViewExpenseComponent } from './view-expense/view-expense.component';
import { SetTargetComponent } from './set-target/set-target.component';
import { ViewTargetComponent } from './view-target/view-target.component';
import { UpdateTargetComponent } from './update-target/update-target.component';

const routes: Routes = [
  {path:'',redirectTo: 'login',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'menu',canActivate:[AuthenticationGuard],component: MenuComponent},
  {path:'expense',canActivate:[AuthenticationGuard],component: ExpenseComponent},
  {path:'addExpense',canActivate:[AuthenticationGuard],component:AddExpenseComponent},
  {path:'viewExpense',canActivate:[AuthenticationGuard],component:ViewExpenseComponent},
  {path:'target',canActivate:[AuthenticationGuard],component: TargetComponent},
  {path:'setTarget',canActivate:[AuthenticationGuard],component:SetTargetComponent},
  {path:'viewTarget',canActivate:[AuthenticationGuard],component:ViewTargetComponent},
  {path:'updateTarget',canActivate:[AuthenticationGuard],component:UpdateTargetComponent},
  {path:'expenseSeverity',canActivate:[AuthenticationGuard],component: ExpenseSeverityComponent},
  {path:'signup',component: SignupComponent},
  {path:'logout',canActivate:[AuthenticationGuard],component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
