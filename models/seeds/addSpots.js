exports.seed = (knex, Promise) => {
// deletes existing entries
 return knex('spots').del()
    .then(() => {
        return knex('spots').insert([
            {
                name: 'Afuri',
                category: 'Ramen',
                station: 'Roppongi',
                url: "https://www.google.com/maps?cid=14319064606199612243"
            },
            {
                name: 'Frijoles',
                category: 'Mexican',
                station: 'Roppongi',
                url: "https://www.google.com/maps?cid=11145341133167895688"
            },
            {
                name: 'Tsur Ton Tan',
                category: 'Udon',
                station: 'Roppongi',
                url: "https://www.google.com/maps?cid=6396722401939980052"
            },
            {
                name: 'Kinniku Shokudo',
                category: 'Meat',
                station: 'Roppongi',
                url: "https://www.google.com/maps?cid=9211835876005803086"
            },
            {
                name: 'Sharin Shinjuku Nishiguchi',
                category: 'Tsukemen',
                station: 'Shinjuku',
                url: "https://www.google.com/maps?cid=7001513219977479074"
            },
            {
                name: 'Mensho San Francisco',
                category: 'Ramen',
                station: 'Shinjuku',
                url: "https://www.google.com/maps?cid=5252254258149634979"
            },
            {
                name: 'Natural Lawson',
                category: 'Convenience Store',
                station: 'Shinjuku',
                url: "https://www.google.com/maps?cid=5252254258149634979"
            }]
        )}
    );
};