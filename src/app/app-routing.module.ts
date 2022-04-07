import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ListAllCompaniesComponent } from './company/list-all-companies/list-all-companies.component';
import { RegisterCompanyComponent } from './company/register-company/register-company.component';
import { GetCompanyDetailsByCodeComponent } from './company/get-company-details-by-code/get-company-details-by-code.component';

const routes: Routes = [
  {path:'Company',component:CompanyComponent},
  {path:'ListAllCompanies',component:ListAllCompaniesComponent},
  {path:'RegisterCompany',component:RegisterCompanyComponent},
  {path:'GetCompanyDetailsByCode',component:GetCompanyDetailsByCodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
