<p align="center">this was created during my time as a student at code chrysalis.</p>

<p align="center"><img src="https://i.ibb.co/bKvtjJZ/logo.png" width="300px"></p>

<p align="center">a free noncomprehensive API list of ロカボ low carb, ketogenic restaurants in tokyo, japan.</p>

## setup

in terminal,

`yarn` to install dependencies.

`yarn migrate` to run migrations and database setup.

`yarn test` to run tests.

`yarn dev` to start app and preview index.html page.

## REST endpoints

#### GET

`/restaurants` view all low carb restaurants.

`/restaurants?id=AFURI` view low carb restaurants by name.

`/restaurants?id=#` view low carb restaurants by id.

#### POST

`/restaurants` add a new low carb restaurant.

#### PUT

`/restaurants?id=#` update low carb restaurant with required feilds.

#### DELETE

`/restaurants?id=#` delete low carb restaurant by id.

## csv data

find and download the data in CSV format [here](https://github.com/steffieharner/cc10-project.api-solo/tree/master/csv).

## license

all code is not licensed.
