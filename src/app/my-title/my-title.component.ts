import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-my-title',
  templateUrl: './my-title.component.html',
  styleUrls: ['./my-title.component.css']
})
export class MyTitleComponent {

  constructor(private route: Router) {
    // console.log('enter to MyTitleComponent',this.recipe);
  }

  @Input()
  recipe: Recipe | any//פה הבעיה מקבל אותו כאובייקט לא ידוע

  //מאיפה הוא מקבל את ה-ID??
  material() {
    console.log('recipe',this.recipe);
    
      console.log("id",this.recipe.id);
      console.log(this.recipe.products);
      
     this.route.navigate(["/my_recipe",this.recipe.id]) 
  }

}
