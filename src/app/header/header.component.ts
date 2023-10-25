import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public name: string | null;

  constructor(private route: Router, private service: BookService) {
    // this.name = localStorage.getItem('name');
    const customersString = localStorage.getItem('customers');
    if (customersString) {
        this.service.customers = JSON.parse(customersString);
    }
    this.name = localStorage.getItem('name');
  }

  public exist: boolean = false;  

  all() {
    this.route.navigate(["/list"])
  }

  leader() {
    this.route.navigate(["leader"])
  }

  add() {
    this.route.navigate(["add"])
  }

  login() {
    this.route.navigate(["login"])
  }

  about() {
    this.route.navigate(["about"])
  }

  my() {
    this.route.navigate(["my_list"])
  }

   buy() {
    this.route.navigate(["buying"])
   }

  // constructor(נתב פרטי: נתב) {
  //   this.name = localStorage.getItem('name');
  // }

  // leader() {
  //   this.router.navigate(['/leader']);
  // }
 
  out() {
      localStorage.clear();
      this.exist = false; // Set to false when the user logs out
      location.reload();
  }
}