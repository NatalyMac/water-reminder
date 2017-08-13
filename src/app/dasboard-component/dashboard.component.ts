import { Component, OnInit } from '@angular/core';
import { DrinkUser } from '../models/drink-user';
import { DrinkService } from '../service/drink.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  drinks: DrinkUser[] = [];
  total: number = 0;

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.drinkService.getDrinksInside()
      .then(drinks => {
        for (let drink of drinks) {
          this.total = this.total + drink.total * drink.drinkId.volume * drink.drinkId.hydro / 100;
        }
        return [this.drinks = drinks, this.total];
      });
    };
}

