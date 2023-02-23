'use strict';

const { parseMultipartData } = require('strapi-utils/lib');

/**
 * footballsports1 controller
 */

// const {sanitizeEntity} = require("strapi-utils")

// module.exports = {
//     async me(ctx){
//         const user   = ctx.state.user;
//         if (!user){
//             return ctx.badRequest(null,[{
//                 id : "No Authorization found in header"
//             }])
//         }

//         const data = await strapi.service.footballsports1.find({user : user.id})

//         if(!data) {
//             return ctx.notFound()
//         }

//         return sanitizeEntity(data, {model : strapi.models.footballsports1})
//     }
// }


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::footballsports1.footballsports1', ({strapi}) => ({


    async create(ctx){
        let entity;
        // if(ctx.is("multipart")){
        //     const { data, files} = parseMultipartData(ctx);
        //     data.user = ctx.state.user.id;
        //     entity=await strapi.service('api::footballsports1.footballsports1').create(data, {files})
        // }else{
        //     ctx.request.body.user = ctx.state.user.id;
        //     entity = await strapi.service('api::footballsports1.footballsports1').create(ctx.request.body)
        // }

        var employee = {
            "firstName": "firstName",
            "lastName": "lastName"
          }

        var newdata = {
            "name" : ctx.request.body.data.name,
            "detail" : ctx.request.body.data.detail,
            "date" : ctx.request.body.data.date,
            "time" : ctx.request.body.data.time,
            "user" : ctx.state.user.id
        }
        // console.log("DATA", ctx.request.body.data.name)
        console.log("employee", newdata)

        entity = await strapi.entityService.create('api::footballsports1.footballsports1', {
            data: newdata,
          });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
  

        // ctx.body = ctx.request.body
        
    },

    async update(ctx) {
        const { id } = ctx.params;
    
        let entity;
    
        // const footballsports1 = await strapi.service('api::footballsports1.footballsports1').find({filters: { id: ctx.params.id,
        //     'user': ctx.state.user.id }});
        const footballsports1 = await strapi.service('api::footballsports1.footballsports1').find({filters: { id: ctx.params.id,
            'user': ctx.state.user.id }});
        
            
        if (footballsports1.pagination.total === 0) {
          return ctx.unauthorized(`You can't update this entry`);
        }
    
        
        // if (ctx.is('multipart')) {
        //     console.log("PEH")
        //     const { data, files } = parseMultipartData(ctx);
        //     entity = await strapi.service('api::footballsports1.footballsports1').update({ id : id}, data, {
        //       files,
        //     });
        //   } else {}
            // console.log("POHH")
            // entity = await strapi.service('api::footballsports1.footballsports1').update({ id : id}, ctx.request.body);
            console.log("BODY",ctx.request.body)
            entity = await strapi.entityService.update('api::footballsports1.footballsports1', ctx.params.id , {
                data: ctx.request.body.data,
              });
          

          const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

          return this.transformResponse(sanitizedEntity);
  
      },

      async delete(ctx) {
        const { id } = ctx.params;

        // const transactions = await strapi
        // .query('api::footballsports1.footballsports1')
        // .findMany({
        //   where: { 'user.username': 'sydclone' },
        //   populate: { offer: true },
        // });

        
        // ctx.state.user.id
        const footballsports1 = await strapi.service('api::footballsports1.footballsports1').find({filters: { id: ctx.params.id,
            'user': ctx.state.user.id }});
        
            
        if (footballsports1.pagination.total === 0) {
          return ctx.unauthorized(`You can't update this entry`);
        }
        const entity = await strapi.entityService.delete('api::footballsports1.footballsports1', ctx.params.id);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

            // ctx.body = ctx.state.user.id
      },

    async me(ctx){

        // ctx.body = "HAHHAHAHAH"
        // try{
        //     ctx.body = 'HEHHE';
        // }catch(err){
        //     ctx.body = 'error';
        // }

        // const user   = ctx.state.user;
        // if (!user){
        //     return ctx.response.badRequest('invalid query');
        // }

        // ctx.body = user

       
        // const data = await strapi.services.footballsports1.find({user : user.id});
        const { query } = ctx;

        const entity = await strapi.service('api::footballsports1.footballsports1').find({filters: { user: ctx.state.user.id} ,populate: '*'});
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);


        // if(!data) {
        //     return ctx.notFound()
        // }

        // return sanitizeEntity(data, {model : strapi.models.footballsports1})
        // return sanitizeEntity("datacc", {model : "strapi.models.footballsports1"})
    }
}));
