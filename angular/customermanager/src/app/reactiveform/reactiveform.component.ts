import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { test } from '../core/service';
function ratingRange(min, max):ValidatorFn{
  return  (c:AbstractControl):{[key:string]:boolean} | null => {
    console.log('rating validation')
    if(c.value !== null && isNaN(c.value) || c.value < min || c.value > max){
      console.log('rating validation')
      return {'range':true}
    }
    return null;
  }
}

function emailMatcher(c:AbstractControl):{[key:string]:boolean} | null{
  let confirmEmailControl = c.get('confirmEmail');
  let emailControl = c.get('email');
  console.log('email matcher',confirmEmailControl.value === emailControl.value);
  if(confirmEmailControl.value === emailControl.value){
    return null;
  }
  return {match:true};
}

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  reactiveformComponentInfo:string;
  customersForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.reactiveformComponentInfo = 'constructor of reactiveformComponentInfo';
    console.log(this.reactiveformComponentInfo);
  }

  ngOnInit() {
    this.reactiveformComponentInfo = 'ngOninit of reactiveformComponentInfo';
    console.log(this.reactiveformComponentInfo);

    // this.customersForm = new FormGroup({
    //   firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   lastName: new FormControl('',),
    //   email: new FormControl(''),
    //   verify: new FormControl(true)
    // });
    
    this.customersForm = this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.minLength(3)]],
      emailGroup: this.fb.group({
        email: ['',[Validators.required,Validators.email]],
        confirmEmail:['',[Validators.required,Validators.email]],
      },{validator:emailMatcher}),
      
      rating:['',ratingRange(1,5)],
      verify: 'true'
    });
  }
  save() {
    console.log(this.customersForm);
  }
  
}
