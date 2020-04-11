import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingrediants: Ingrediant[] = [
    new Ingrediant( "Apple", 10),
    new Ingrediant( "Tomato", 5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
