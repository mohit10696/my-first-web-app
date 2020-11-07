import { Component, OnInit } from '@angular/core';
import {recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:recipe[] = [
    new recipe('first recipe','first desp','https://avatars3.githubusercontent.com/u/41354652?s=460&u=02ec0d1a438bdda5cfe0b501eab7aabe3da7c3ce&v=4'),
    new recipe('second recipe','second desp','https://pbs.twimg.com/media/DR_bDcRU8AEchG-.jpg'),
    new recipe('first recipe','first desp','https://avatars3.githubusercontent.com/u/41354652?s=460&u=02ec0d1a438bdda5cfe0b501eab7aabe3da7c3ce&v=4'),
    new recipe('second recipe','second desp','https://pbs.twimg.com/media/DR_bDcRU8AEchG-.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
