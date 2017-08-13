import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { Drink } from '../models/drink';
import { DrinkService } from '../service/drink.service';



@Component({
  moduleId: module.id,
  selector: 'drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.css'],
})

export class DrinkDetailComponent implements OnInit {
  drink: Drink;
  constructor(
    private drinkService: DrinkService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.drinkService.getDrink(params.get('id')))
      .subscribe(drink => this.drink = drink);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.drinkService.update(this.drink)
      .then(() => this.goBack());
  }
}
