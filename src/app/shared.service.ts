import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly ApiUrl="http://localhost:60613/api";
  
  constructor(private http:HttpClient) { }

  getAllCompanies():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/v1.0/market/company/getall')
  }

  getCompanyById(val:any):Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/v1.0/market/company/info/'+val)
  }

  registerCompany(val:any){
    return this.http.post(this.ApiUrl+'/v1.0/market/company/register',val)
  }

  deleteCompany(val:any){
    return this.http.delete(this.ApiUrl+'/v1.0/market/company/delete/'+val)
  }

 
  addStock(val:any,val2:any){
    return this.http.put(this.ApiUrl+'/v1.0/market/stock/add/'+val,val2)
  }

  getStock(val:any,val2:any,val3:any):Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/v1.0/market/stock/get/'+val+'/'+val2+'/'+val3)
  }

}
