exports.seed = (knex, Promise) => {
    // deletes existing entries
    return knex('spots').del()
        .then(() => {
            return knex('spots').insert([{
                    name: 'AFURI',
                    category: 'RAMEN',
                    station: 'ROPPONGI',
                    url: "https://www.google.com/maps?cid=14319064606199612243"
                },
                {
                    name: 'FRIJOLES',
                    category: 'MEXICAN',
                    station: 'ROPPONGI',
                    url: "https://www.google.com/maps?cid=11145341133167895688"
                },
                {
                    name: 'TSURU TON TAN',
                    category: 'UDON',
                    station: 'ROPPONGI',
                    url: "https://www.google.com/maps?cid=6396722401939980052"
                },
                {
                    name: 'KINNIKU SHOKUDO',
                    category: 'MEAT',
                    station: 'ROPPONGI',
                    url: "https://www.google.com/maps?cid=9211835876005803086"
                },
                {
                    name: 'SHARIN',
                    category: 'TSUKEMEN',
                    station: 'SHINJUKU',
                    url: "https://www.google.com/maps?cid=7001513219977479074"
                },
                {
                    name: 'MENSHO SAN FRANCISCO',
                    category: 'RAMEN',
                    station: 'SHINJUKU',
                    url: "https://www.google.com/maps?cid=5252254258149634979"
                },
                {
                    name: 'NATURAL LAWSON',
                    category: 'CONVENIENCE STORE',
                    station: 'SHINJUKU',
                    url: "https://www.google.com/maps?cid=5252254258149634979"
                },
                {
                    name: 'AFURI',
                    category: 'RAMEN',
                    station: 'SHINJUKU',
                    url: "https://www.google.com/maps?cid=5252254258149634979"
                },
                {
                    name: 'MOUKO TANMEN NAKAMOTO',
                    category: 'RAMEN',
                    station: 'SHINJUKU',
                    url: "https://www.google.com/maps?cid=11740999548917112354"
                },
                {
                    name: 'NOODLE STAND STOKYO',
                    category: 'RAMEN',
                    station: 'HARAJUKU',
                    url: "https://www.google.com/maps?cid=18367455769214611706"
                },
                {
                    name: 'DOTONBORI KAMAKURA',
                    category: 'RAMEN',
                    station: 'SHIBUYA',
                    url: "https://www.google.com/maps?cid=12612975012938975569"
                }
            ])
        });
};