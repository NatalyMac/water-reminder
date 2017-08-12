import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DrinkDetailComponent } from './drink-detail.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DrinkDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
