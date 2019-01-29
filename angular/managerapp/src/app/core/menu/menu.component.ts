import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  @Output() selectPageDetails = new EventEmitter()
  constructor(private router:Router, private dataService:DataService) {
    console.log(this.dataService.getData());
  }

  ngOnInit() {
  }
  loadPage(page:string){
    if(page === 'customerspage'){
      this.selectPageDetails.emit({loadCustomersPageFlag:true}) // trigger the events and send data
    }
    if(page === 'orderspage'){
      this.selectPageDetails.emit({loadOrdersPageFlag:true}) // trigger the events and send data
    }
    
     
  }
  loginLogOutText:string = 'login';
  loginOrOut(){
    // login service logout service
    if(true){
      this.loginLogOutText = true? 'logout' :'login'
    }else{
      this.router.navigate(['/login'])
    }
  }


}
