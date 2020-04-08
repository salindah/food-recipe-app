import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Pizza Recipe', 'Pizza', 'https://media-cdn.tripadvisor.com/media/photo-s/15/c5/a4/14/pepperoni-lovers.jpg'),
    new Recipe('Sandwich Recipe', 'Sandwiches', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/egg-cress-club-sandwich_0.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
