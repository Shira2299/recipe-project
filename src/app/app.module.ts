import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeTitleComponent } from './recipe-title/recipe-title.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { MyListComponent } from './my-list/my-list.component';
import { MyTitleComponent } from './my-title/my-title.component';
import { ShowMyRecipeComponent } from './show-my-recipe/show-my-recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MatDialogModule } from '@angular/material/dialog'; // וודא שהספריה יובאה


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddRecipeComponent,
    ShowRecipeComponent,
    FooterComponent,
    RecipeListComponent,
    RecipeTitleComponent,
    LoginComponent,
    AboutComponent,
    MyListComponent,
    MyTitleComponent,
    ShowMyRecipeComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule, // הוסף זאת
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
