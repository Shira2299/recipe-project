import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  /**
   *
   */
  customer: Customer | any

  constructor(private route: Router, private service: BookService) {
    const client = localStorage.getItem("customers");
    if(client){
      this.service.customers = JSON.parse(client);
      this.customer = this.service.customers;
    }
    // this.service.customers[1].shoppingList
    console.log('this.service.customers[1]',this.service.customers[1]);
    
    console.log('shoping',this.service.customers[1].shoppingList);
    
  }

  delete(item: string) {
    console.log('item',item);
    const index = this.customer[1].shoppingList.indexOf(item);
    if(index !== -1) {
      this.customer[1].shoppingList.splice(index,1);// מחק את הפריט מהמערך
      localStorage.setItem('customers',JSON.stringify(this.service.customers));// שמור את המערך בלוקלסטורג
    }  
  }
}
