import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  // an array that will store the cardsInfo that will be passed from app (parent) to card-list (child)
  @Input() cards = [];

  constructor() { }

  ngOnInit(): void {}

}
