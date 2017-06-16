$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/movie/search_movie.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#This is a comment"
    }
  ],
  "line": 2,
  "name": "Movie Search",
  "description": "To allow a use to search through a movie catalog and find a desired movie.",
  "id": "movie-search",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "a movie with the title \u0027Inside Out\u0027, produced by \u0027Pixar\u0027, released 19 June 2015",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "a movie with the title \u0027Out of Africa\u0027, produced by \u0027Universal Pictures\u0027, released 20 December 1985",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "a movie with the title \u0027Avatar\u0027, produced by \u002720th Century Fox\u0027, released 18 December 2009",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Inside Out",
      "offset": 24
    },
    {
      "val": "Pixar",
      "offset": 50
    },
    {
      "val": "19 June 2015",
      "offset": 67
    }
  ],
  "location": "MovieSearchSteps.addNewMovie(String,String,String)"
});
formatter.result({
  "duration": 106205612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Out of Africa",
      "offset": 24
    },
    {
      "val": "Universal Pictures",
      "offset": 53
    },
    {
      "val": "20 December 1985",
      "offset": 83
    }
  ],
  "location": "MovieSearchSteps.addNewMovie(String,String,String)"
});
formatter.result({
  "duration": 81078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Avatar",
      "offset": 24
    },
    {
      "val": "20th Century Fox",
      "offset": 46
    },
    {
      "val": "18 December 2009",
      "offset": 74
    }
  ],
  "location": "MovieSearchSteps.addNewMovie(String,String,String)"
});
formatter.result({
  "duration": 67223,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search movies by title",
  "description": "",
  "id": "movie-search;search-movies-by-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Given a movie with the title \u0027Inside Out\u0027, produced by \u0027Pixar\u0027, released 19 June 2015"
    },
    {
      "line": 13,
      "value": "#And a movie with the title \u0027Out of Africa\u0027, produced by \u0027Universal Pictures\u0027, released 20 December 1985"
    },
    {
      "line": 14,
      "value": "#And a movie with the title \u0027Avatar\u0027, produced by \u002720th Century Fox\u0027, released 18 December 2009"
    }
  ],
  "line": 15,
  "name": "the customer searches for movies with the keyword \u0027out\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "2 movie should have been found",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the catalog should have 3 total movies",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "out",
      "offset": 51
    }
  ],
  "location": "MovieSearchSteps.setSearchParameters(String)"
});
formatter.result({
  "duration": 104171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 0
    }
  ],
  "location": "MovieSearchSteps.verifyQuantityOfMoviesFound(int)"
});
formatter.result({
  "duration": 2119853,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.verifyCatalogSize()"
});
formatter.result({
  "duration": 39513,
  "status": "passed"
});
});