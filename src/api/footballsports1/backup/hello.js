// "use strict"

// const { createCoreController} = require("@strapi/strapi").factories

// module.exports = createCoreController('api::footballsports1.footballsports1', () => ({
//     async index(ctx, next){
//         ctx.send({msg : "this is hello route"})
//     }
// }));


'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::footballsports1.footballsports1', ({strapi}) => ({
    async customAction(ctx){
        try{
            ctx.body = 'ok';
        }catch(err){
            ctx.body = 'error';
        }
    }
}));
