import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customerscardview',
  templateUrl: './customerscardview.component.html',
  styleUrls: ['./customerscardview.component.css']
})
export class CustomerscardviewComponent implements OnInit {
  @Input() custData;
  constructor() { }

  ngOnInit() {
    console.log('this cust card view ', this.custData);
  }

}
