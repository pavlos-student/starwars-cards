import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CARDS} from '../db-test-data';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let el: DebugElement;

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CardListComponent
      ],
      imports: [
        MatCardModule,
        DragDropModule
      ]
    })
      .compileComponents()
      .then( () => {
        fixture = TestBed.createComponent(CardListComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display a card list', () => {
    // pass to the cards variable in the CardsList component the mock data
    component.cards = Object.values(CARDS[0].results);
    // to detect changes in the DOM
    fixture.detectChanges();
    // get the HTML element on the card class, this is the cards that are rendered to the user
    const cards = el.queryAll(By.css('.card'));
    // test that the cards aren't empty
    expect(cards).toBeTruthy('Could not find cards');
    // check the length if it's according to the mocked data
    expect(cards.length).toBe(3, 'unexpected number of cards');
  });
});
