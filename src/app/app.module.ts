import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { DrinkDetailComponent } from './drink-detail-component/drink-detail.component';
import { DrinksComponent } from './drinks-component/drinks.component';
import { CatComponent } from './cat-component/cat.component';
import { DashboardComponent } from './dasboard-component/dashboard.component';
import { DrinkService } from './service/drink.service';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }  from './app.component';
import {MessageService} from './service/message.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DrinkDetailComponent,
    DrinksComponent,
    CatComponent
  ],
  providers: [
    DrinkService,
    MessageService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
