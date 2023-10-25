import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []
  constructor(private service: BookService) {}

  ngOnInit() {
    this.recipes = this.service.recipes;
  }
  
}
