import { Component, OnDestroy} from '@angular/core';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from '../service/message.service';

import { DrinkUser } from '../models/drink-user';
import { DrinkService } from '../service/drink.service';



@Component({
  moduleId: module.id,
  selector: 'my-cat',
  templateUrl: './cat.component.html',
})

export class CatComponent  implements OnInit, OnDestroy {
  public drinks: DrinkUser[] = [];
  public total: number = 0;
  public subscription: Subscription;

  constructor(
    private drinkService: DrinkService,
    private messageService: MessageService) {
    this.subscription = this.messageService
      .getMessage()
      .subscribe(message => {
        if (message.text === 'refresh total') {
          this.getTotal();
        }
      });
  }

  ngOnInit(): void {
    this.getTotal();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  getTotal(): void {
  this.drinkService.getDrinksInside()
    .then(drinks => {
      this.total = 0;
      for (let drink of drinks) {
        this.total = this.total + drink.total * drink.drinkId.volume * drink.drinkId.hydro / 100;
      }
      return [this.drinks = drinks, this.total];
    });
  }
}
