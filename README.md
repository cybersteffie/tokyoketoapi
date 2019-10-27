<p align="center">this was created during my time as a student at code chrysalis.</p>

<p align="center"><img src="https://i.ibb.co/bKvtjJZ/logo.png" width="300px"></p>

<p align="center">a free noncomprehensive API list of ロカボ low carb, ketogenic restaurants in tokyo, japan.</p>

## setup

in terminal,

`yarn` to install dependencies.

`yarn migrate` to run migrations and setup database.

`yarn seed` to seed initial data from `models/seed/addSpots.js`.

`yarn dev` to start app and preview index.html page.

`yarn test` to run tests.

## REST endpoints

**GET** `tokyoketo/spots` access all low carb spots.

**GET** `tokyoketo/spots?id=AFURI` access low carb restaurants by name.

**GET** `tokyoketo/spots?id=#` accessgit  low carb spots by id.

**POST** `tokyoketo/spots` add a new low carb spots.

**PATCH** `tokyoketo/spots?id=#` update low carb spots with required feilds.

**DELETE** `tokyoketo/spots?id=#` delete low carb spots by id.

## csv data

find and download the data in CSV format [here](https://github.com/steffieharner/cc10-project.api-solo/tree/master/csv).

## license

all code is not licensed.
