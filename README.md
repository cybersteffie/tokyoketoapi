<p align="center">this was created during my time as a student at code chrysalis.</p>

<p align="center"><img src="/tokyoketoapi-logo.png" width="300px"></p>

<p align="center">a free noncomprehensive API of spots with 糖質制限(reduced sugar)・ロカボ (low carb)・ケトジェニック (ketogenic) friendly options in tokyo, japan.</p>

## setup

compatible with Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift databases. once git repo is cloned, in terminal,

`yarn` to install dependencies.

`yarn dev` to start app and preview index.html @ `localhost:4000`.

`yarn migrate` to run migrations and setup database.

`yarn seed` to seed initial data from `models/seed/addSpots.js`.

`yarn test` to run tests.

## REST endpoints

**GET** `tokyoketo/spots` access all low carb spots.

**POST** `tokyoketo/spots` add a new low carb spot.

**PATCH** `tokyoketo/spots/:id` update low carb spots by id.

**DELETE** `tokyoketo/spots/:id` delete low carb spots by id.

## license

copywright (c) 2019 steffieharner
licensed under the MIT license
