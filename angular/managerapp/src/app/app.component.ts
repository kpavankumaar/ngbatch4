import { Component, OnInit } from '@angular/core';
import { DataService } from './core/services/data.service';

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
      console.log('inside customerspage condition');
      this.showPage.loadCustomersPageFlag = true;
      this.showPage.loadOrdersPageFlag = false;
      this.showPage.loadLoginPageFlag = false;
    }else if(pageDetails.loadOrdersPageFlag === true){
      console.log('inside orderpage condition');
      this.showPage.loadOrdersPageFlag = true;
      this.showPage.loadLoginPageFlag = false;
      this.showPage.loadCustomersPageFlag = false;
    }else if(pageDetails.loadLoginPageFlag === true){
      console.log('inside loginpage condition');
      this.showPage.loadLoginPageFlag = true;
      this.showPage.loadCustomersPageFlag = false;
      this.showPage.loadOrdersPageFlag = false;
    }
  }
  // recievedData;
  // constructor(public dataService:DataService){

  // }
  // ngOnInit(){
  //   this.recievedData = this.dataService.getData();
  //   console.log(this.recievedData);
  // }
}
