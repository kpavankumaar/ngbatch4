import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  @Output() selectPageDetails = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  loadPage(page:string){
    if(page === 'customerspage'){
      this.selectPageDetails.emit({loadCustomersPageFlag:true}) // trigger the events and send data
    }
    if(page === 'orderspage'){
      this.selectPageDetails.emit({loadOrdersPageFlag:true}) // trigger the events and send data
    }
    if(page === 'loginpage'){
      this.selectPageDetails.emit({loadLoginPageFlag:true}) // trigger the events and send data
    }
     
  }

}
