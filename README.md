<p align="center">this was created during my time as a student at code chrysalis.</p>

<p align="center"><img src="/tokyoketo-logo.png" width="300px"></p>

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

**GET** `tokyoketo/spots?id=#` access low carb spots by id.

**POST** `tokyoketo/spots` add a new low carb spots.

**PATCH** `tokyoketo/spots?id=#` update low carb spots by id.

**DELETE** `tokyoketo/spots?id=#` delete low carb spots by id.

## csv data

find and download the data in CSV format [here](https://github.com/steffieharner/tokyoketoapi/tree/master/csv).

## license

copywright (c) 2019 steffieharner
licensed under the MIT license
