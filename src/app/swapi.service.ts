import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  constructor(private http: HttpClient) { }

  search(term: string) {
    return this.http.get('https://swapi.dev/api/people/', {
      params: {
        search: term
      }
    });
  }

}
