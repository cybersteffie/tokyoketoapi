module.exports = (knex, Spot) => {
    return (params) => {
        const spotName = params.name;
        const spotCategory = params.category;
        const spotStation = params.station;
        const spotUrl = params.url;

        return (
            knex("spot") // spot table
            .insert({
                name: name,
                category: category,
                station: station,
                url: url
            })
            .then(() => {
                return knex("spot")
                    .where({
                        name: name,
                        category: category,
                        station: station,
                        url: url
                    })
                    .select();
            })
            .then((spots) => new Spot(spots.pop()))
            // create a spot model out of the plain database response
            .catch((err) => {
                // sanitize known errors
                if (
                    err.message.match("duplicate key value") ||
                    err.message.match("UNIQUE constraint failed")
                )
                    return Promise.reject(new Error("That spot already exists"));

                // throw unknown errors
                return Promise.reject(err);
            })
        );
    };
};