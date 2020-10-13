import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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

  onCardDrop(event: CdkDragDrop<any[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
