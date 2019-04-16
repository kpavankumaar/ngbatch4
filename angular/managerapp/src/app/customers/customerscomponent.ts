import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
    selector: 'app-customerscomponent',
    templateUrl: './customerscomponent.html',
})
export class CustomersComponent implements OnInit{
    constructor(public dataService: DataService){

    }
    sendData;
    ngOnInit() {
        // this.sendData = [{firstName:'ravi',lastName:'kumar'}]
        this.dataService.getCustomersPage(1, 10).subscribe((res) => {
        //    console.log(res) ;
           this.sendData = res;
        });
    }

}
