import { Component } from '@angular/core';


export class WhatToDrink  {
  id: string;
  name: string;
  hydro: number;
  volume: number;
}

const DRINKS: WhatToDrink[] = [
  { id: 'a11', name: 'Water', hydro: 100, volume: 200 },
  { id: 'a12', name: 'Tea', hydro: 10, volume: 250 },
  { id: 'a13', name: 'Milk', hydro: 80, volume: 200 },
  { id: 'a14', name: 'Coffee', hydro: 10, volume: 100 },
  { id: 'a15', name: 'Juce', hydro: 90, volume: 200 },
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1><h2>{{whatToDrink.name}} to drink!</h2>
    
    <h2>My drinks</h2>
    <ul class="drinks">
      <li  *ngFor="let drink of drinks" (click)="onSelect(drink)">
        <span class="badge">{{drink.id}}</span>{{drink.name}}
      </li>
    </ul>
    
    <div><label>id: </label>{{whatToDrink.id}}</div>
    <input [(ngModel)]="whatToDrink.name" placeholder="name">
    <div><label>hydro: </label>{{whatToDrink.hydro}}%</div>
    <div><label>name: </label>{{whatToDrink.volume}}ml</div>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .drinks {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .drinks li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .drinks li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .drinks li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .drinks .text {
    position: relative;
    top: -3px;
  }
  .drinks .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent  {
  title = 'Time to water!';
  drinks = DRINKS;
  whatToDrink = { id: 'a111', name: 'Water', hydro: 100, volume: 500 };
}

