  import { Component, OnInit } from '@angular/core';
  import { Recipe } from '../recipe.model'; 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'Thie is a simple test DESC', 'https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/recipe-collections/collection-image/2013/09/asparagus-new-potato-frittata.jpg?itok=55SVWUYP'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
