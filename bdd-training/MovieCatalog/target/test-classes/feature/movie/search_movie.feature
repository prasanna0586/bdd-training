#This is a comment
Feature: Movie Search
To allow a use to search through a movie catalog and find a desired movie.

Background:
Given a movie with the title 'Inside Out', produced by 'Pixar', released 19 June 2015
And a movie with the title 'Out of Africa', produced by 'Universal Pictures', released 20 December 1985
And a movie with the title 'Avatar', produced by '20th Century Fox', released 18 December 2009

@wip
Scenario: Search movies by title
#Given a movie with the title 'Inside Out', produced by 'Pixar', released 19 June 2015
#And a movie with the title 'Out of Africa', produced by 'Universal Pictures', released 20 December 1985
#And a movie with the title 'Avatar', produced by '20th Century Fox', released 18 December 2009
When the customer searches for movies with the keyword 'out'
Then 2 movie should have been found
And the catalog should have 3 total movies

Scenario: Search movies by order
#Given a movie with the title 'Inside Out', produced by 'Pixar', released 19 June 2015
#And a movie with the title 'Out of Africa', produced by 'Universal Pictures', released 20 December 1985
#And a movie with the title 'Avatar', produced by '20th Century Fox', released 18 December 2009
When the customer searches for the third movie
Then 1 movie should have been found
And the movie title should be 'Avatar'

Scenario Outline: Search movies by title
#Given a movie with the title 'Inside Out', produced by 'Pixar', released 19 June 2015
#And a movie with the title 'Out of Africa', produced by 'Universal Pictures', released 20 December 1985
#And a movie with the title 'Avatar', produced by '20th Century Fox', released 18 December 2009
When the customer searches for movies with the keyword <searchParameters>
Then <moviesFound> movie should have been found
And the catalog should have 3 total movies

Examples:
|searchParameters|moviesFound|
|'out'|2|
|'africa'|1|
|'Inside'|1|
|'Ocean'|0|