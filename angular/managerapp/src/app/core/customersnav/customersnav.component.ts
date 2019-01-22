import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customersnav',
  templateUrl: './customersnav.component.html',
  styleUrls: ['./customersnav.component.css']
})
export class CustomersnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loadPage(page:string){
    if(page === 'customerspage'){
      // this.selectPageDetails.emit({loadCustomersPageFlag:true}) // trigger the events and send data
    }
    if(page === 'orderspage'){
      // this.selectPageDetails.emit({loadOrdersPageFlag:true}) // trigger the events and send data
    }
    if(page === 'loginpage'){
      // this.selectPageDetails.emit({loadLoginPageFlag:true}) // trigger the events and send data
    }
     
  }
}
