
# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Environment
#### Workspace
This project can be done inside of this Udacity workspace. To ready your environment follow these steps:

##### In a terminal tab, create and run the database:
- switch to the postgres user `su postgres` 
- start psql `psql postgres`
- in psql run the following:
  - `CREATE USER shopping_user WITH PASSWORD 'password123';`
  - `CREATE DATABASE shopping;`
  - `\c shopping`
  - `GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;`
- to test that it is working run `\dt` and it should output "No relations found."

##### In the 2nd terminal:
- install yarn `npm install yarn -g`
- install db-migrate on the machine for terminal commands `npm install db-migrate -g`
- check node version `node -v` - it needs to be 10 or 12 level
- *IF node was not 10 or 12 level, run* 
  - `npm install -g n`
  - `n 10.18.0`
  - `PATH="$PATH"`
  - `node -v` to check that the version is 10 or 12
- install all project dependencies `yarn`
- to test that it is working, run `yarn watch` should show an app starting on `0.0.0.0:3000`

#### Local Environment
If want to do this project on your local computer and you already have docker installed, there is a docker file provided for you with generic content. Note that you may need to update this file to fit your computer in order to use it locally. 

## Steps to Completion

1. Plan to Meet Requirements
2. DB Creation and Migrations
3. Models
4. Express Handlers
5. JWTs
6. QA and Readme

Go to the following pages to get started on the project!

<!--
%%ulab_page_divider
--><hr/>

### 1. Plan to Meet Requirements
In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API. 

Your first task is to read the requirements and update the document with the following:
- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests. **Example**: for a SHOW route: 'blogs/:id' [GET] 

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys. **Example**: You can format this however you like but these types of information should be provided
Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape. 

<!--
%%ulab_page_divider
--><hr/>

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

<!--
%%ulab_page_divider
--><hr/>

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

<!--
%%ulab_page_divider
--><hr/>

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled.

<!--
%%ulab_page_divider
--><hr/>

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIREMENTS.md`.

<!--
%%ulab_page_divider
--><hr/>

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from `REQUIREMENTS.md`, it is ready for submission!

### Rubric
[Rubric](https://review.udacity.com/#!/rubrics/3061/view)