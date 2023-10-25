import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-my-recipe',
  templateUrl: './show-my-recipe.component.html',
  // styleUrls: ['./show-my-recipe.component.css']
  styles: [
    `* { direction: rtl; height: 100%; width: unset; text-align: center; }`,    
    `.pic { height: 25vh; width: 15vw;}`      
  ]
})
export class ShowMyRecipeComponent {
  public name: string | null;
  public _edit: boolean = false;
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
 })

  @Input()
  recipe: Recipe | any

  ngOnInit() {
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

  // deleteRecipe(recipeId: number) {
  //   const index = this.service.recipes.findIndex(recipe => recipe.id === recipeId );
  //   if(index!==-1)
  //   {
  //     this.service.recipes.splice(index,1);
  //     console.log('delete=============');
  //     const ind = this.service.customers[1].recipeIds?.findIndex(id => id === recipeId);
  //     //לבדוק למה לא מחק באמת????????????????
  //     console.log('befor', this.service.customers[1].recipeIds);
  //     (this.service.customers[1].recipeIds as number[]).splice(ind, 1);
  //     // this.service.customers[1].recipeIds?.splice(ind, 1);
  //     // this.service.customers[1].recipeIds?.slice(ind,1);//??????????????
  //     console.log('after', this.service.customers[1].recipeIds);
  //     //לבדוק אם אכן זה טוב כשמוסיפים 2 ואז מוחקים אחד ומוסיפים שוב אחד האם זה הולך טוב??
  //     console.log('this.service.customers[1].recipeIds',this.service.customers[1].recipeIds);
      
  //     this.route.navigate(['/list'])
  //   }
  // }
  deleteRecipe(recipeId: number) {
    const index = this.service.recipes.findIndex(recipe => recipe.id === recipeId);
  
    if (index !== -1) {
      this.service.recipes.splice(index, 1);
      console.log('delete=============');
  
      const recipeIds = this.service.customers[1].recipeIds as number[];
      console.log('recipeIds',recipeIds);
      
      if (recipeIds) {
        const ind = recipeIds.indexOf(recipeId);
  
        if (ind !== -1) {
          recipeIds.splice(ind, 1);//מוחק מהמערך המקורי
          console.log('this.service.customers[1].recipeIds', recipeIds);
        }
      }
  
      this.route.navigate(['/list']);
    }
  }
  
  edit() {
    this._edit = true;
    console.log('_edit=',this._edit);   
  }

saveEdit() {  
  const index = this.service.recipes.findIndex(recipe => recipe.id === this.editedRecipe.id);
  console.log('index',index);
  if (index !== -1) {
    this.service.recipes[index].level=this.form.value.level;
    this.service.recipes[index].during=this.form.value.during;
      // Update products
      this.service.recipes[index].products = this.form.value.products;
  }
  // Exit edit mode
  this._edit = false;  
}

}
