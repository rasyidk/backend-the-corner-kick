'use strict';

/**
 * sports service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sports.sports');
