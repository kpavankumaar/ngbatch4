import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  recievedData;
  constructor(public dataService:DataService){

  }
  ngOnInit(){
    this.recievedData = this.dataService.getData();
    console.log(this.recievedData);
  }

}
