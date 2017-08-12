import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { DrinkService } from '../service/drink.service';


@Component({
  selector: 'my-cat',
  templateUrl: './cat.component.html',
})

export class CatComponent  implements OnInit {
  public total: number;

  constructor(
    private drinkService: DrinkService,

  ) { }

  ngOnInit(): void {
    this.getTotal();
  }

  getTotal(): void {
    this.drinkService.getTotal().then(total =>  this.total = total);
  }
}
