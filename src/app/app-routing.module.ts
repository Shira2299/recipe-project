import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { MyListComponent } from './my-list/my-list.component';
import { ShowMyRecipeComponent } from './show-my-recipe/show-my-recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: "", component:AboutComponent},
  {path: "list", component: RecipeListComponent },
  {path: "recipe/:id", component: ShowRecipeComponent},
  {path: "add", component: AddRecipeComponent},
  {path: "login", component: LoginComponent},
  {path: "about", component: AboutComponent},
  {path: "my_list", component: MyListComponent },
  {path: "my_recipe/:id", component: ShowMyRecipeComponent},
  {path: "buying", component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
