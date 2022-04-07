import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testUI';
  compCode:any;

constructor(private formBuilder: FormBuilder) {}


onClickSubmit(data:any) {
    alert(data.companyCodeSrch);    
  }

}
