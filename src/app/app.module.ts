import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
