# Not to do backend api

this is the backend api for our not to do react app

## How to use

- Clone the project
- run `npm install`
- Make sure to have `nodemon` install globally in your system, if you don't have then run ` npm i -g nodemon`
- run `npm start`

## ApI Endpoints

- all the api endpoint will follow the `rootUrl/api/v1/` path
  | # | API| Method | Description |
  |-----|----|----|------|
  |1.|`/`| GET | Fet a single ticket if an id is provided or return list from server |
  |2.|`/`| POST | Add new ticket in the database |
  |3.|`/`| DELETE | Expects arrays of ids to be deleted|
