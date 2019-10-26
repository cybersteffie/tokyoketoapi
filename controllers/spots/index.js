module.exports = (knex, User) => {
  return (params) => {
    const { spotName } = params.name;

    return (
      knex("spots")
        .insert({ name: spotName })
        .then(() => {
          return knex("spots")
            .where({ name: spotName })
            .select();
        })
        .then((users) => new Spot(users.pop()))
        // create a user model out of the plain database response
        .catch((err) => {
          // throw unknown errors
          return Promise.reject(err);
        })
    );
  };
};




// const knex = require('../knex.js');

// module.exports = {
//     readTable() {
//         return async (req, res) => {
//             res.status(200).json(result);
//             return result;
//         }
//     },

//     addSpot() {
//         return async (req, res) => {
//           // require all fields
//             const newSpot = req.body;
//             await knex("spots").insert(newSpot).into("spots");
//             res.sendStatus(200);
//         }
//     },

//     patchSpot() {
//         return async (req, res) => {
//             const keys = ["name", "station", "type"];
//             let obj = {};
//             for (let property in req.body) {
//                 if (keys.includes(property)) {
//                     obj[property] = req.body[property];
//                 }
//             }
//             await knex('spots')
//                 .where({ "id": req.query.id })
//                 .update(obj);
//             res.sendStatus(200);
//         }
//     },

//     deleteSpot() {
//         return async (req, res) => {
//             await knex('spots')
//                 .where('id', req.query.id)
//                 .del();
//             res.sendStatus(200);
//         }
//     }

// }