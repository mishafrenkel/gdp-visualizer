# US-GDP-Growth
A Node.js (backend) and React (frontend) based application to show the GDP growth of U.S.A for the past 60 years.

## Application Description

This applictaion displays the GDP of USA for the past 60 years.
It provides a window size to display a range of years whose data is required.
The next button shows the GDP of previous years.

Data source -

	http://api.worldbank.org/countries/USA/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json

Frontend - A React application which shows a graph from the data fed by the node backend application. The graph library for this application is d3.v5.min.js .

Backend - A node application which gets JSON data from the above data source and transform it to be used by the front end.

## Steps to Run the application locally

* Open backend location in command line and run the following:

	npm install

	node index.js

* Open frontend location in command line and run the following:

	npm install

	npm start