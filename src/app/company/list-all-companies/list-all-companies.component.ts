import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { GetCompanyDetailsByCodeComponent } from '../get-company-details-by-code/get-company-details-by-code.component';
import { Route, Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-all-companies',
  templateUrl: './list-all-companies.component.html',
  styleUrls: ['./list-all-companies.component.css']
})
export class ListAllCompaniesComponent implements OnInit {

  constructor(private service:SharedService) { }
  companyList:any;
  code:any;
  @Output() compCodeToView = new EventEmitter<any>();

  ngOnInit(): void {
    this.refreshCompanyList();
  }
  refreshCompanyList(){
    this.service.getAllCompanies().subscribe((data: any)=>{
      this.companyList = data;
    });
  }

  deleteCompany(item:any){
    this.code = item.code;
    this.service.deleteCompany(this.code).subscribe(res=>{
      this.refreshCompanyList();
    })
  }

  showStockList(item:any){
    this.code = item.code;
    alert(this.code);
    //this.router.navigate(["../GetCompanyDetailsByCode"],   {relativeTo: this.route});
    //this.compCodeToView.emit(item.code);
  }
}
