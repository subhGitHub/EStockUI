import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { } 
  currentMsgFromChild1ToChild2 : any;
  fwdMsgToSib2($event: any) { this.currentMsgFromChild1ToChild2 = $event; }
  ngOnInit(): void {
    
  }

  
}
