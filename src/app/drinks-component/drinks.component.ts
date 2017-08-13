import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Drink } from '../models/drink';
import { DrinkService } from '../service/drink.service';
import { MessageService } from '../service/message.service';


@Component({
  moduleId: module.id,
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
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getDrinks();
  }

  getDrinks(): void {
    this.drinkService.getDrinks().then(drinks => {
      return this.drinks = drinks;
    });
  }

  onSelect(drink: Drink): void {
    this.selectedDrink = drink;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedDrink._id]);
  }

  goDrink(drink: Drink, user: string): void {
    if (!drink) { return; }
    this.drinkService.addDrinksInside(drink._id, '')
      .then(res => {
        this.drinkService.getDrinksInside();
      });
  }

  add(title: string, hydro: number, volume: number): void {
    title = title.trim();
    if (!title && !hydro && !volume) { return; }
    this.drinkService.create(title, hydro, volume)
      .then(drink => {
        this.drinks.push(drink);
        this.selectedDrink = null;
      });
  }

  delete(drink: Drink): void {
    this.drinkService
      .delete(drink._id)
      .then((message) => {
        if (message.text() !== '400') {
          this.drinks = this.drinks.filter(d => d !== drink);
          if (this.selectedDrink === drink) { this.selectedDrink = null; }
        } else {
          alert('Cannot delete. It is used');
        }
      });
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Drinks Component to Cat Component!');
  }

  clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }
}
