module.exports = (knex, Spot) => {
    return (params) => {
        console.log("MODELS delete.js > params", params)
        const {
            name,
            category,
            station,
            url
        } = params;

        return (
            knex("spots")
            .select()
            .where({
                name
            })
            .delete()
            .then(() => console.log("Deleted!"))
            // create a spot model out of the plain database response
            .catch((err) => {
                console.log(".catch")
                // throw unknown errors
                return Promise.reject(err);
            })
        );
    };
};