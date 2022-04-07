import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { ListAllCompaniesComponent } from './company/list-all-companies/list-all-companies.component';
import { RegisterCompanyComponent } from './company/register-company/register-company.component';
import { GetCompanyDetailsByCodeComponent } from './company/get-company-details-by-code/get-company-details-by-code.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'



@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ListAllCompaniesComponent,
    RegisterCompanyComponent,
    GetCompanyDetailsByCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
