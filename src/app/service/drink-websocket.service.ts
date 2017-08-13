import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { Drink } from '../models/drink';

const DRINK_SOCKET_URL = 'ws://echo.websocket.org/';

//const DRINK_SOCKET_URL = 'ws://127.0.0.1:3005/';

@Injectable()
export class DrinkWebsocketService {

  public drinks: Subject<Drink>;

  constructor(wsService: WebsocketService) {
    this.drinks = <Subject<Drink>>wsService
      .connect( DRINK_SOCKET_URL)
      .map((response: MessageEvent): Drink => {
        let data = JSON.parse(response.data);
        console.log('-----------');
        console.log(response.data);
        return {
          _id: data._id,
          title: data.title,
          volume: data.volume,
          hydro: data.hydro,
          created_date: data.created_date
        };
      });
  }
}
