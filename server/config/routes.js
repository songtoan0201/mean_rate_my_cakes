let cakes = require('../controllers/cakes');
let ratings = require('../controllers/ratings');

module.exports = function(app){
    
    // routes
    app.get('/cakes', cakes.index);
    app.post('/cakes', cakes.create);

    app.get('/cakes/:id', cakes.findOneById);
    app.put('/cakes/:id',cakes.update);
    app.delete('/cakes/:id',cakes.delete);

    // routes concerning ratings
    app.get('/cakes/ratings', ratings.index); // this will find all the ratings.
    app.post('/cakes/:cakeId/ratings', ratings.create); // this will create the ratings for a specific cake
}