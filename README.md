# FlextockTask

## Overview

A web application which would take a string in a form input and search for people using this string input in this public API https://swapi.dev. All retrieved results will be rendered as cards and each card will have the character’s details (Name, URL, height, homeworld). Once rendered the user is able to drag and drop the cards to reorder them on screen.

## Technology stack

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

- Angular: 10.1.5

- It Run on:
    - Node: 12.16.3
    - OS: darwin x64

### Installing Dependencies

#### Installing Node and NPM

This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

#### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the `root` directory of this repository. After cloning, open your terminal and run:

```bash
npm install
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Architectural logical flow

### Angular Component and Service logical flow

Interaction between the App's Components and Service

Both SearchBarComponent and CardListComponent are children of the AppComponent. First the user inputs a text in the search bar (in the SearchBarComponent), an event emitter in that component will emit/transfer the search keyword entered by the user to the parent component (AppComponent). The latter will call the SwapiService sending the search term in order to get the meta data from a third party API server - Swapi.dev/api. The SwapiService does an HTTP GET request to get that data and sends it back to the AppComponent. Finally the AppComponent sends the meta-data to the CardListComponent to be rendered to the user.

![picture](src/assets/architecture-diagram.jpg)


## API Reference

### Base URL
#### https://swapi.dev/api/

### Endpoints
#### GET '/people/?search=searchTerm' 

- General: this api accepts a query parameter value input 'searchTerm', entered by the user
- Sample Request:
```
curl https://swapi.dev/api/people/?search=luke
```
- Sample Response:
```$xslt
{
    "count": 1, 
    "next": null, 
    "previous": null, 
    "results": [
        {
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "http://swapi.dev/api/planets/1/", 
            "films": [
                "http://swapi.dev/api/films/1/", 
                "http://swapi.dev/api/films/2/", 
                "http://swapi.dev/api/films/3/", 
                "http://swapi.dev/api/films/6/"
            ], 
            "species": [], 
            "vehicles": [
                "http://swapi.dev/api/vehicles/14/", 
                "http://swapi.dev/api/vehicles/30/"
            ], 
            "starships": [
                "http://swapi.dev/api/starships/12/", 
                "http://swapi.dev/api/starships/22/"
            ], 
            "created": "2014-12-09T13:50:51.644000Z", 
            "edited": "2014-12-20T21:17:56.891000Z", 
            "url": "http://swapi.dev/api/people/1/"
        }
    ]
}
```

## Styling

### Material Design 

According to the Material Design website https://material.io/develop/web, I've used the <a href="material.angular.io">Angular Material Design</a>

### Drag & Drop feature

Drag & Drop using the Angular CDK

references:

- https://www.digitalocean.com/community/tutorials/angular-drag-drop
- https://material.angular.io/cdk/drag-drop/overview

## Unit & Integration tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Code Coverage

Run `ng test --code-coverage` to get a summary of the tests' code coverage

```
=============================== Coverage summary ===============================
Statements   : 68.75% ( 22/32 )
Branches     : 0% ( 0/4 )
Functions    : 63.64% ( 7/11 )
Lines        : 62.96% ( 17/27 )
================================================================================
```
##Theoretical Questions

The questions & answers to the task's theoretical questions can be viewed via the following public link:

https://docs.google.com/document/d/1F7V7-f9w2aAx6OhUmPRLd8URll0zF5E_h-CEb9tRTlo/edit?usp=sharing

## Author

Boulos Ananian, 2020
