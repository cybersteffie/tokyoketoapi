module.exports = (knex, Spot) => {
    return (params) => {
        console.log("MODELS delete.js > params", params)
        const {
            id
        } = params;

        return (
            knex("spots")
            .select()
            .where({
                id
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