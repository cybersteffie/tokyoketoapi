module.exports = (knex, Spot) => {
    return (params) => {
        console.log(".create", params)
        const {
            name,
            category,
            station,
            url
        } = params;

        return (
            knex("spots") // spot table
            .insert({
                name,
                cgittegory,
                station,
                url
            })
            .then(() => {
                return knex("spots")
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
                console.log(".catch")
                // throw unknown errors
                return Promise.reject(err);
            })
        );
    };
};