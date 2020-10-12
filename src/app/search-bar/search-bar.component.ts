import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  // property used to store the input text every time the user hits a letter
  searchTerm = '';
  // event emitter to be able to pass the submitted value (searchTerm) to the parent component (app)
  @Output() submitted = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any): void {
    // to stop the default behavior of the form when pressing the enter button
    event.preventDefault();
    // event emitter submitting the searchTerm (user input) to the app component (parent)
    this.submitted.emit(this.searchTerm);
  }
}
