import { Component, Input } from '@angular/core';
import { Drink } from './drink';


@Component({
  selector: 'drink-detail',
  template: `    
    <div *ngIf="selectedDrink">
      <h2>{{drink.name}} details!</h2>
      <div><label>id: </label>{{drink.id}}</div>
      <input [(ngModel)]="drink.name" placeholder="name">
      <div><label>hydro: </label>{{drink.hydro}}%</div>
      <div><label>name: </label>{{drink.volume}}ml</div>
    </div>
  `,
})

export class DrinkDetailComponent {
  @Input() drink: Drink;
}
