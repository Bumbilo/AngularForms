import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray  } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {
  orderSheetForm: FormGroup;
  weirdRequestsControls: FormArray;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
/*
  ngOnInit() {
    let customerNameControl = this.orderSheetForm.get('customerName') as FormControl;
    customerNameControl.setValue('Justin', {emitEvent: true});
  }*/

 private buildForm() {
    this.orderSheetForm = this.formBuilder.group({
      customerName: this.formBuilder.control(null),
      size: this.formBuilder.control(null),
      bread: this.formBuilder.control(null),
      specialtySandwich: this.formBuilder.control(null),
      weirdRequests: this.formBuilder.array([
        this.formBuilder.control(null)
      ]),
      otherNotes: this.formBuilder.control(null),
      meats: this.formBuilder.group({
        meatHam: this.formBuilder.control(null),
        meatTurkey: this.formBuilder.control(null),
        meatRoastBeef: this.formBuilder.control(null)
      }),
      cheeses: this.formBuilder.group({
        cheeseProvolone: this.formBuilder.control(null),
        cheesesCheddar: this.formBuilder.control(null),
        cheesesSwiss: this.formBuilder.control(null)
      }),
      veggiesAndSuch: this.formBuilder.group({
        veggieLettuce: this.formBuilder.control(null),
        veggieTomato: this.formBuilder.control(null),
        veggieMustard: this.formBuilder.control(null)
      }) 
    });
    this.weirdRequestsControls = this.orderSheetForm.get('weirdRequests') as FormArray;
  }

  onAddWeirRequest() {
    this.weirdRequestsControls.push(this.formBuilder.control(null));
  }

  onRemoveWeirRequest(index) {
    this.weirdRequestsControls.removeAt(index);
  }

  onResetForm() {
    this.orderSheetForm.reset();
  }

  onSubmitForm() {
    console.log(this.orderSheetForm.value);
  }

  // onResetWeirRequests() {
  //   this.weirdRequestsControls.reset();
  // }

}
