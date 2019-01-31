import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {
  
  constructor(private dataService:DataService) { 
    console.log('login component')
  }

  ngOnInit() {
    console.log(this.dataService.getData());
  }

}
