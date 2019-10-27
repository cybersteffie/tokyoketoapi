module.exports = (knex, Spot) => {
    return (params) => {
        const {
            name,
            category,
            station,
            url
        } = params;

        return (
            knex("spot") // spot table
            .insert({
                name,
                category,
                station,
                url
            })
            .then(() => {
                return knex("spot")
                    .where({
                        name,
                        category,
                        station,
                        url
                    })
                    .select();
            })
            .then((spots) => new Spot(spots.pop()))
            // create a spot model out of the plain database response
            .catch((err) => {
                // throw unknown errors
                return Promise.reject(err);
            })
        );
    };
};