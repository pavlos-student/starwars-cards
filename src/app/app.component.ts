import { Component } from '@angular/core';
import {SwapiService} from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardsInfo = [];

  constructor(private swapiService: SwapiService) {}

  onSearchTerm(term: string): void {
    this.swapiService.search(term).subscribe((response: any) => {
      this.cardsInfo = response.results;
      // console.log(response.results);
    });
  }
}
