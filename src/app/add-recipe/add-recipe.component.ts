import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  // client_id: number = -1;

  constructor(private service: BookService, private route: Router ) {
    console.log('this.service.customers',this.service.customers);   
  }

  form: FormGroup = new FormGroup({
     name: new FormControl('',[Validators.required]),
     img: new FormControl('',[]),
     during: new FormControl('',[Validators.required,Validators.min(0)]),
     level: new FormControl('',[Validators.required,Validators.min(0),Validators.max(10)]),
     create_clientID: new FormControl('',[Validators.required]),
     products: new FormArray([]),
     instructions: new FormArray([])
     //why there is error if i write this.instructions????
  })

  get products() {
    return this.form.controls["products"] as FormArray<FormGroup>
  }

  get instructions() {
    return this.form.controls["instructions"] as FormArray<FormGroup>
  }

  get formAltaControls(): any {
    return this.form.controls;
  }

//אשמח להסבר על העניין של ההוספה
  addRecipe() {
    this.form.value.id = (this.service.recipes[this.service.recipes.length-1].id) as number+1
    console.log('this.form.value.id',this.form.value.id);
    this.service.recipes.push(this.form.value)
    console.log('this.form.value',this.form.value); 
    this.service.customers[this.service.customers.length-1].recipeIds?.push(this.form.value.id);
    console.log('this.service.customers[this.service.customers.length-1]',this.service.customers[this.service.customers.length-1]);
    // localStorage.setItem('customers', JSON.stringify(this.service.customers));
    localStorage.setItem('recipe',JSON.stringify(this.form.value));
    console.log('recipe-product',this.service.recipes[this.service.recipes.length-1].products);
    console.log('product',this.form.value.products);
    console.log('product.length',this.form.value.products.length);
    for(let p of this.form.value.products){
      console.log('p.did_buy:', p.did_buy);
      console.log('p.name:', p.name);
      if(p.did_buy == 0) //or cast to number if (Number(p.did_buy) === 0)
      {
        console.log('enter to if ===0');       
        this.service.customers[this.service.customers.length-1].shoppingList?.push(p.name)
      }
    }
    console.log('this.service.customers[1].shoppingList',this.service.customers[this.service.customers.length-1].shoppingList);
    localStorage.setItem('customers', JSON.stringify(this.service.customers));//שומרים שוב כי חלק מהאובייקט התעדכן מחדש
    this.route.navigate(['/list']);
  }

  addProduct() {
    this.products.push(new FormGroup({
      product_id: new FormControl(''),
      name: new FormControl(''),
      count: new FormControl(''),
      type: new FormControl(''),
      did_buy: new FormControl('')
    }))
  }

  addInstruction() {
    this.instructions.push(new FormGroup({
      instructions: new FormControl('')
    }))
  }

}
