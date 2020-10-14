import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('emitter should not fire an event with a null or empty search term', () => {
  //   // Arrange/declare variable & event emitter
  //   let searchTerm = 'luke';
  //   expect(searchTerm).not.toBeNull();
  //   // Act - call method
  //   component.onFormSubmit(searchTerm);
  // });
});

// component.submitted.subscribe(term => searchTerm = term);
