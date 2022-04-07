import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  code: any;
  name: any;
  ceo: any;
  turnover: any;
  website: any;
  stock_Exchange: any;


  ngOnInit(): void {
  }

  registerCompany(){
    var val = {
      code:this.code,
      name:this.name,
      ceo:this.ceo,
      turnover:this.turnover,
      website:this.website,
      stock_Exchange:this.stock_Exchange
    }
    this.service.registerCompany(val).subscribe(res=>{
        alert(JSON.parse(JSON.stringify(res)));
    });
  }
}
