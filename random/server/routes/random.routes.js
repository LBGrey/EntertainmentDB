const RandomController = require('../controllers/random.controller');


module.exports = function(app){
    app.get('/', RandomController.getHomepage)
    app.get('/dashboard', RandomController.homeRandom)
    app.get('/lyrics/track/:id', RandomController.getLyricsRandoms)
    app.get('/api/randoms', RandomController.getAllRandoms)
    app.get("/api/random/details/:id", RandomController.getOneRandom);
    app.get('/random/searchMusic', RandomController.searchMusicRandom);
    app.get('/random/searchEnt', RandomController.searchEntRandom);
    app.get('/ent/favorites', RandomController.getFavoritesRandom);
    app.get('/music/favorites', RandomController.getMusicFavoritesRandom);
    app.put("/api/random/random/:id", RandomController.updateRandom);
    app.delete("/api/random/delete/:id", RandomController.deleteRandom);
};

