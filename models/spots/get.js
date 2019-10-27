module.exports = (knex, Spot) => {
    return () => {
        console.log("MODELS get.js")
        return (
            knex("spots")
            .select()
            .then((spots) => {
                console.log(spots);
                return spots;
            })
            .catch((err) => {
                console.log(".catch")
                // throw unknown errors
                return Promise.reject(err);
            })
        );
    };
};