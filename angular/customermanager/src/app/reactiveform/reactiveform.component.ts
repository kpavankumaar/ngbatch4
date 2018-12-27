import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { test } from '../core/service';
function ratingRange(c:AbstractControl):{[key:string]:boolean} | null{
  console.log('rating validation')
  if(c.value !== null && isNaN(c.value) || c.value < 1 || c.value > 5){
    console.log('rating validation')
    return {'range':true}
  }
  return null;
}
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  customersForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    // this.customersForm = new FormGroup({
    //   firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   lastName: new FormControl('',),
    //   email: new FormControl(''),
    //   verify: new FormControl(true)
    // });
    
    this.customersForm = this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.email]],
      rating:['',ratingRange],
      verify: 'true'
    });
  }
  save() {
    console.log(this.customersForm);
  }
  
}
