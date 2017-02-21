import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {
  orderSheetForm: FormGroup;
  weirdRequestsControls: FormArray;
  showWelcomeMessage = false;
  customerNameControl;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
/*
  ngOnInit() {
    let customerNameControl = this.orderSheetForm.get('customerName') as FormControl;
    customerNameControl.setValue('Justin', {emitEvent: true});
  }*/

  CordonBleuItem = {
    name: 'Cordon Bleu',
    size: 'large'
  }


 private buildForm() {
    this.orderSheetForm = this.formBuilder.group({
      customerName: this.formBuilder.control(null, [Validators.required, Validators.minLength(2)]),
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
    this.customerNameControl = this.orderSheetForm.get('customerName');
    this.customerNameControl.valueChanges
      .subscribe(value => {
        this.showWelcomeMessage = value && value.toLowerCase().trim() === 'justion s.';
      });
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
