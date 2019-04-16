import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../core/services/data.service';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      const id = + params['id'];
      if (id) {
        this.dataService.getCustomer(id).subscribe((customer) => {
          this.customer = customer;
        })
      }
    });
  }

}
