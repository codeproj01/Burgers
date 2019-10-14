# Burgers
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

Overview
In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and an ORM, either your own homemade, OR Sequelize. (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

Model setup
______________________________________________________________________

Inside your burger directory, create a folder named models.


In models, make a burger.js file.


Inside burger.js, import orm.js into burger.js


Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.


Export at the end of the burger.js file.







Controller setup
______________________________________________________________________

Inside your burger directory, create a folder named controllers.


In controllers, create the burgers_controller.js file.


Inside the burgers_controller.js file, import the following:

Express
burger.js



Create the router for the app, and export the router at the end of your file.



View setup
______________________________________________________________________

Inside your burger directory, create a folder named views.


Create the index.handlebars file inside views directory.


Create the layouts directory inside views directory.


Create the main.handlebars file inside layouts directory.


Setup the main.handlebars file so it's able to be used by Handlebars.


Setup the index.handlebars to have the template that Handlebars can render onto.


Create a button in index.handlebars that will submit the user input into the database.
