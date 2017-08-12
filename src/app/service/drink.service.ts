import { Injectable } from '@angular/core';
import { Drink } from '../models/drink';
import { DRINKS } from '../models/mock-drinks';


@Injectable()
export class DrinkService {
  getDrinks(): Promise <Drink[]> {
    return Promise.resolve(DRINKS);
  }

  getDrinksInside(): Promise <Drink[]> {
    return Promise.resolve(DRINKS);
  }

  getTotal(): Promise <number> {
    return Promise.resolve(1600);
  }

  getDrink(id: string): Promise <Drink> {
    return this.getDrinks()
      .then(drinks => drinks.find(drink => drink.id === id));
  }

  getDrinkSlowly(): Promise<Drink[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getDrinks()), 2000);
    });
  }
}
