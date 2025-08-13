# How are California high schools named?

I completed this project for Columbia Journalism School's Lede data journalism program.

[Check out the project's website](https://tgnewikow.github.io/CA-high-school-names/)!

## Questions
- How many schools in California have Spanish names?
- How many schools in California are named after a place, a person or something else?

## The data
I downloaded an Excel file with the names and locations of all public high schools, exluding magnet and charter schools, in California from the [California Department of Education's website](https://www.cde.ca.gov/schooldirectory/). From there, I manually classified the names of the schools by whether they were named after a place, person or other, and by whether they had a Spanish name. 

I used Pandas to calculate the percentages of each category.

After classifying, I uploaded the csv with latitudes and longitudes to a new style in Mapbox to plot each of the schools on a map of California. I pulled in county shape files and styled the colors of the dots according to category. 

## The website

I based my interactive storytelling website off of a [template from Mapbox](https://github.com/mapbox/storytelling). I swapped in my own HTML, CSS and Javascript code to customize the site so the dots respresenting schools would appear and disappear for each name category. I gave the interface a school-like feel with lined paper as the background and included sketchy illustrations I drew myself using Procreate. 

## Key findings

- Three in five schools are named after a place.
- Among schools named after a person, politician is the most common occupation.
- One-fourth of schools have Spanish names.

