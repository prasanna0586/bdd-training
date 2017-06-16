Feature: Catalog Status
	In order to quickly and easily manage my catalog of movies
	As a movie owner
	I want to determine the status of my movie catalog

Scenario: SCENARIO 1
Given the catalog has an initial size of 0 movies
When a movie with a title 'WALL-E' and a producer 'Pixar' with the release date of 27 June 2008 is added
And a movie with a title 'Aladin' and a producer 'Disney' with the release date of 25 November 1992 is added
Then the catalog has 2 movies

Scenario: SCENARIO 2
Given the catalog has an initial size of 0 movies
When no movies are added
Then the catalog has 0 movies

Scenario: SCENARIO 3
Given the catalog has an initial size of 0 movies
When the following movies are added:
|title|producer|releaseDate|
|'WALL-E'|'Pixar'|27 June 2008|
|'Aladin'|'Disney'|25 November 1992|
Then the catalog has 2 movies