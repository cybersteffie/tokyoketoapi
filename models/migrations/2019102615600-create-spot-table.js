exports.up = function (knex, Promise) {

    return knex.schema.createTable("spots", (t) => {
        t.increments()
            .index();

        t.string("name")
            .unique()
            .notNullable()
            .index();

        t.string("category")
            .unique()
            .notNullable()
            .index();

        t.string("station")
            .notNullable();

        t.string("url")
            .notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("spots");
};