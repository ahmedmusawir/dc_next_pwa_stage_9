const routes = require('next-routes')();

module.exports = routes;

routes.add('article', '/article/:id');
