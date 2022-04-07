import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common'
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-get-company-details-by-code',
  templateUrl: './get-company-details-by-code.component.html',
  styleUrls: ['./get-company-details-by-code.component.css']
})
export class GetCompanyDetailsByCodeComponent implements OnInit {

  constructor(private service:SharedService, private datepipe:DatePipe) { }
  
  ngOnInit(): void {
    this.getCompanyDetailsByCode("CC7");
  }
  
  @Input() code: any;

  companyDetails:any;
  
  maxStockPrice:any=0;
  minStockPrice:any=0;
  avgStockPrice:any=0;
  
  stockprice:string="";

  fromdate:any = new Date();
  toDate:any = new Date();
 

  getCompanyDetailsByCode(val:any){
    this.service.getCompanyById(val).subscribe((data: any)=>{
      this.companyDetails = data;
      this.priceCalc(data);
    });
    
  };
  
  priceCalc(comp:any){
    var count = 0;
    var totalStockPrice=0;
    this.maxStockPrice = comp.stockList[0].price;
    this.minStockPrice = comp.stockList[0].price;
    this.fromdate = this.datepipe.transform(comp.stockList[0].dateTimeStock, 'dd-MM-yyyy');
    this.toDate = this.datepipe.transform(comp.stockList[0].dateTimeStock, 'dd-MM-yyyy');
    for(let item of comp.stockList){
      if(item.price > this.maxStockPrice){
        this.maxStockPrice = item.price;
      }

      if(item.price < this.minStockPrice){
        this.minStockPrice = item.price;
      }

      if(item.dateTimeStock < this.fromdate){
        this.fromdate = this.datepipe.transform(item.dateTimeStock, 'dd-MM-yyyy');
      }
      if(item.dateTimeStock > this.toDate){
        this.toDate = this.datepipe.transform(item.dateTimeStock, 'dd-MM-yyyy');
      }

      totalStockPrice = totalStockPrice + item.price
      count ++;
    }

    this.avgStockPrice = totalStockPrice/count;

  }

  addStock(item:any){    
    this.service.addStock(item,this.stockprice).subscribe((res: any)=>{
      console.log(JSON.stringify(res));      
    });
    };
    

    filteData(item:any){
      this.service.getStock(item,this.fromdate,this.toDate).subscribe((data: any)=>{
        this.companyDetails = data;
        this.priceCalc(data);
      });
    }
  }



