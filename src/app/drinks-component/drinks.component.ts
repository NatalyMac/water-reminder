import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Drink } from '../models/drink';
import { DrinkService } from '../service/drink.service';


@Component({
  selector: 'my-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css'],
})

export class DrinksComponent  implements OnInit {
  public drinks: Drink[];
  public selectedDrink: Drink;

  constructor(
    private drinkService: DrinkService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.getDrinks();
  }

  getDrinks(): void {

    this.drinkService.getDrinks().then(drinks =>  this.drinks = drinks);

  }

  onSelect(drink: Drink): void {
    this.selectedDrink = drink;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedDrink.id]);
  }

  goDrink(): void {
    // this.router.navigate(['/detail', this.selectedDrink.id]);
    console.log('should add to cat inside');
  }
}
