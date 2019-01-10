import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'managerapp';
  showPage = {
    loadCustomersPageFlag:false,
    loadOrdersPageFlag:false,
    loadLoginPageFlag:false
  };
  recievePageLoadDetails(pageDetails){
    console.log(pageDetails);
    if(pageDetails.loadCustomersPageFlag === true){
      this.showPage.loadCustomersPageFlag = true;
      this.showPage.loadOrdersPageFlag = false;
      this.showPage.loadLoginPageFlag = false;
    }else if(pageDetails.loadOrdersPageFlag === 'orderspage'){
      this.showPage.loadOrdersPageFlag = true;
      this.showPage.loadLoginPageFlag = false;
      this.showPage.loadCustomersPageFlag = false;
    }else if(pageDetails.loadLoginPageFlag === 'loginpage'){
      this.showPage.loadLoginPageFlag = true;
      this.showPage.loadCustomersPageFlag = false;
      this.showPage.loadOrdersPageFlag = false;
    }
  }
}
