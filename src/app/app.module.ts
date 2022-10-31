import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthInterceptor } from './authInterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { AuthenticationGuard } from './authentication.guard';
import {MatTableModule} from '@angular/material/table';
import { MenuComponent } from './menu/menu.component';
import { ExpenseComponent } from './expense/expense.component';
import { TargetComponent } from './target/target.component';
import { ExpenseSeverityComponent } from './expense-severity/expense-severity.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ViewExpenseComponent } from './view-expense/view-expense.component';
import { SetTargetComponent } from './set-target/set-target.component';
import { ViewTargetComponent } from './view-target/view-target.component';
import { UpdateTargetComponent } from './update-target/update-target.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    MenuComponent,
    ExpenseComponent,
    TargetComponent,
    ExpenseSeverityComponent,
    AddExpenseComponent,
    ViewExpenseComponent,
    SetTargetComponent,
    ViewTargetComponent,
    UpdateTargetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatGridListModule,
    MatTableModule
  ],
  providers: [AuthenticationGuard , { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
