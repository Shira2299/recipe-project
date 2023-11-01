import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Recipe } from '../models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  // styleUrls: ['./show-recipe.component.css']
  styles: [
    `* { direction: rtl; height: 100%; width: unset; text-align: center; }`,    
    `.pic { height: 25vh; width: 15vw;}`      
  ]
})
export class ShowRecipeComponent implements OnInit {

  public name: string | null;
  // public _edit: boolean = false;
  // public my_recipe: boolean = false;
  public editedRecipe: Recipe=new Recipe(); // Store the edited recipe

//אשמח על מה שהבאנו בבנאי ועל הפונקציה למטה
  constructor(private routeActive: ActivatedRoute, private service: BookService,private route: Router) {
      this.name = localStorage.getItem("name");
  }
  form: FormGroup = new FormGroup({
    during: new FormControl('',[]),
    level: new FormControl('',[]),
    // create_clientID: new FormControl('',[Validators.required]),
    products: new FormArray([]),
    // instructions: new FormArray([])
    //why there is error if i write this.instructions????
 })

  @Input()
  recipe: Recipe | any

  ngOnInit() {
    // this.check_recipe(this.recipe.id);
    this.routeActive.params.subscribe((x:any) => {
      console.log(x["id"]);
      this.recipe = this.service.recipes.find((y:any) => y.id == x["id"]);
      console.log(this.recipe);
      console.log('product',this.recipe.products);  
      console.log('instractions',this.recipe.instructions); 
      this.editedRecipe = { ...this.recipe }; // Clone the recipe for editing

      this.recipe.products.forEach((product: any) => {
        const productGroup = new FormGroup({
          product_id: new FormControl(product.product_id),
          name: new FormControl(product.name),
          count: new FormControl(product.count),
          type: new FormControl(product.type),
        });
        (this.form.get('products') as FormArray).push(productGroup);
      });
      
    })
  }

//   check_recipe(recipeId: number) {
//     const val = this.service.customers[1].recipeIds?.findIndex(recipe => recipe === recipeId);
//     if(val!== -1)
//     {
//     this.my_recipe = true;
//     console.log('enter if');
//     }
//     console.log('index',val);
//   }

//   deleteRecipe(recipeId: number) {
//     const index = this.service.recipes.findIndex(recipe => recipe.id === recipeId );
//     if(index!==-1)
//     {
//       this.service.recipes.splice(index,1);
//       this.route.navigate(['/list'])
//     }
//   }

//   edit() {
//     this._edit = true;
//     console.log('_edit=',this._edit);   
//   }

// saveEdit() {  
//   const index = this.service.recipes.findIndex(recipe => recipe.id === this.editedRecipe.id);
//   console.log('index',index);
//   if (index !== -1) {
//     this.service.recipes[index].level=this.form.value.level;
//     this.service.recipes[index].during=this.form.value.during;

//       // Update products
//       this.service.recipes[index].products = this.form.value.products;
//   }
//   // Exit edit mode
//   this._edit = false;  
// }

isString(item: any): boolean {
  return typeof item === 'string';
}


}
