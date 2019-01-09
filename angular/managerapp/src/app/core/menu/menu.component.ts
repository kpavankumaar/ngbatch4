import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loadCustomersPageFlag:boolean = false;
  loadOrdersPageFlag:boolean = false;
  loadLoginPageFlag:boolean = false;
  @Output() selectPageDetails = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  loadPage(page:string){
    if(page === 'customerspage'){
      console.log('customerspage')
      this.loadCustomersPageFlag = true;
      this.loadOrdersPageFlag = false;
      this.loadLoginPageFlag = false;
      this.selectPageDetails.emit(this.loadCustomersPageFlag) 
    }
    if(page === 'orderspage'){
      console.log('orderspage')
      this.loadCustomersPageFlag = false;
      this.loadOrdersPageFlag = true;
      this.loadLoginPageFlag = false;
      this.selectPageDetails.emit(this.loadOrdersPageFlag) 
    }
    if(page === 'loginpage'){
      console.log('loginpage')
      this.loadCustomersPageFlag = false;
      this.loadOrdersPageFlag = false;
      this.loadLoginPageFlag = true;
      this.selectPageDetails.emit(this.loadLoginPageFlag) 
    }
     
  }

}
