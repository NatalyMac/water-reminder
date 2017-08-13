import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Drink } from '../models/drink';
import { DrinkUser } from '../models/drink-user';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DrinkService {
  private user: String = 'Tom';
  private drinksUrl = 'http://127.0.0.1:3005/api/drinks';
  private drinksUserUrl = 'http://127.0.0.1:3005/api/drinks-user';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getDrinks(): Promise <Drink[]> {
    return this.http.get(this.drinksUrl)
      .toPromise()
      .then(response => {
        return response.json() as Drink[];
      })
      .catch(this.handleError);
  }

  getDrink(id: string): Promise <Drink> {
    const url = `${this.drinksUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Drink)
      .catch(this.handleError);
  }

  update(drink: Drink): Promise<Drink> {
    const url = `${this.drinksUrl}/${drink._id}`;
    return this.http
      .put(url, JSON.stringify(drink), {headers: this.headers})
      .toPromise()
      .then(() => drink)
      .catch(this.handleError);
  }

  create(title: string, hydro: number, volume: number): Promise<Drink> {
    return this.http
      .post(this.drinksUrl, JSON.stringify({title: title, hydro: hydro, volume: volume}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Drink)
      .catch(this.handleError);
  }

  delete(id: string): Promise<Response> {
    const url = `${this.drinksUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then((message) => message)
      .catch(this.handleError);
  }

  getDrinksInside(): Promise <DrinkUser[]> {
    return this.http.get(this.drinksUserUrl)
      .toPromise()
      .then(response => {
        return response.json() as DrinkUser[];
      })
      .catch(this.handleError);
  }

  addDrinksInside(drinkId: string, user: string): Promise <DrinkUser> {
    return this.http
      .post(this.drinksUserUrl, JSON.stringify({drinkId: drinkId, user: this.user}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as DrinkUser)
      .catch(this.handleError);
  }

  getDrinkSlowly(): Promise<Drink[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getDrinks()), 2000);
    });
  }
}
