
import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
@Component({
  selector: 'app-recipe-title',
  templateUrl: './recipe-title.component.html',
  styleUrls: ['./recipe-title.component.css']
})
export class RecipeTitleComponent {
  constructor(private route: Router) {}

  @Input()
  recipe: Recipe = new Recipe();
  //מאיפה הוא מקבל את ה-ID??
  material() {
      console.log("id",this.recipe.id);
      console.log(this.recipe.products);
      
     this.route.navigate(["/recipe",this.recipe.id]) 
  }
  
}
