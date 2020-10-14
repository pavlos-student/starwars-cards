import { TestBed } from '@angular/core/testing';

import { SwapiService } from './swapi.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { CARDS } from './db-test-data';

describe("SwapiService", () => {
  // service that will be used in the coming method(s)
  let swapiService: SwapiService;
  let httpTestingController: HttpTestingController;
  const searchTerm = 'skywalker';

  // to run before each method in this 'describe' scope
  beforeEach(() => {
    // constructing objects
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SwapiService,
        HttpClientTestingModule
      ]
    });
    swapiService = TestBed.get(SwapiService);
    httpTestingController = TestBed.get(HttpTestingController);
  });
  // main http request in the service - GET /people?search=/'searchTerm'
  // cards is the retrieved array of people info once this service executes the http request
  // we 1st check that there's an array of cards returned
  // then we check that the length count is one (as in the dummy data in 'db-test.ts' file which is similar to the original payload)
  // then check if the name is 'Luck Skywalker'
  // if one of these conditions where not met then the test fails
  it('should retrieve array of people', () => {
    swapiService.search(searchTerm).subscribe(cards => {
      expect(cards).toBeTruthy('No cards returned');
      expect(cards[0].count).toBe(3);
      expect(cards[0].results[0].name).toBe('Luke Skywalker');
    });
    // mock HTTP request
    const req = httpTestingController.expectOne('https://swapi.dev/api/people/?search=' + searchTerm);
    // HTTP method has to be GET
    expect(req.request.method).toEqual('GET');
    // testing data returned by the mock HTTP request (similar to the original GET response)
    req.flush(Object.values(CARDS));
  });
});
