import { Component, OnInit } from '@angular/core';
import { Drink } from '../models/drink';
import { DrinkService } from '../service/drink.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  drinks: Drink[] = [];

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.drinkService.getDrinksInside()
      .then(drinks => this.drinks = drinks.slice(1, 5));
  }
}

