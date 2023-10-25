import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  exist: boolean = false;

  constructor(private service: BookService, private route: Router) {
    console.log('service',this.service.customers);  
  }
 
  // Form: FormGroup = new FormGroup({
  //   id: new FormControl('',[Validators.required]),
  //   name: new FormControl('',[Validators.required]),
  //   phone: new FormControl('',[]),
  //   contactMethod: new FormControl('',[]),
  //   password: new FormControl('',[Validators.required]),
  //   recipeIds: new FormControl('',[]),
  //   shoppingList: new FormControl('',[]),
  // })
  form: FormGroup = new FormGroup({
    id: new FormControl('',[]),
    name: new FormControl('',[Validators.required]),
    phone: new FormControl('',[]),
    contactMethod: new FormControl('',[]),
    password: new FormControl('',[Validators.required]),
    recipeIds: new FormArray([]),
    shoppingList: new FormArray([]),
    //why there is error if i write this.instructions????
 })

  get formAltaControls(): any {
    return this.form.controls;
  } 

addClient() {
  const newId = (this.service.customers[this.service.customers.length - 1]?.id || 0) + 1;
  this.form.get('id')?.setValue(newId);
  const customer = this.form.value;
  this.service.customers.push(customer);
  localStorage.setItem('customers', JSON.stringify(this.service.customers));// כאן אתה שומר את שם הלקוח
  localStorage.setItem('name', this.form.value.name); 
  localStorage.setItem('id', this.form.value.id); 
  this.exist = true;
  location.reload();
}

}