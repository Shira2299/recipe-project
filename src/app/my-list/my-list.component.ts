import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent {
  recipes: Recipe[] = []
  arr: number[] = []

  constructor(private service: BookService) {//עובד מעולה!
    console.log('enter to MyListComponent');
    console.log('=========check====',this.service.customers[1].recipeIds);
    
    this.arr = this.service.customers[1].recipeIds?.slice()!;
    console.log('arr',this.arr);
    
    this.arr.forEach((recipeId) => {
      // חפש את המתכון ברשימת המתכונים שיש למזהה מתכון זה
      const recipe = this.service.recipes.find((r) => r.id === recipeId);
      // אם מצאת מתכון, הוסף אותו לרשימת המתכונים שלך
      if(recipe)
      {
        console.log('enter if in MyListComponent');      
        this.recipes.push({...recipe});
      }
    })
    console.log('this.recipes',this.recipes); 

  }

}