exports.up = function (knex, Promise) {

    return knex.schema.createTable("spots", (t) => {
        t.increments()
            .index();

        t.string("name")
            .notNullable()
            .index();

        t.string("category")
            .notNullable()
            .index();

        t.string("station")
            .notNullable();

        t.string("url")
            .notNullable()
            .unique;
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("spots");
};