module.exports = (knex, Spot) => {
  return (params) => {
    const name = params.name;

    return (
      knex("spot")
        .insert({ name: name })
        .then(() => {
          return knex("spot")
            .where({ name: name })
            .select();
        })
        .then((spots) => new Spot(users.pop()))
        // create a spot model out of the plain database response
        .catch((err) => {
          // sanitize known errors
          if (
            err.message.match("duplicate key value") ||
            err.message.match("UNIQUE constraint failed")
          )
            return Promise.reject(new Error("That username already exists"));

          // throw unknown errors
          return Promise.reject(err);
        })
    );
  };
};
