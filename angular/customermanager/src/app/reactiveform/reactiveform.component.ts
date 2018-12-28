import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { test } from '../core/service';

function ratingRange(min, max): ValidatorFn {
  return function(c: AbstractControl): {[key: string]: boolean} | null {
            console.log('rating validation');
            if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
              console.log('rating validation');
              return {'range': true};
            }
            return null;
        };
}
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  customersForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.customersForm = new FormGroup({
    //   firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   lastName: new FormControl('',),
    //   email: new FormControl(''),
    //   verify: new FormControl(true)
    // });

    this.customersForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      sendNotification: 'email',
      rating: ['', ratingRange(1, 5)],
      verify: 'true'
    });
  }
  save() {
    console.log(this.customersForm);
  }
  setNotification(notifyVal: string) {
    const phoneControl = this.customersForm.get('phone');
    if (notifyVal === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
}
