const Random = require("../models/random.model");

module.exports.createRandom = (req, res) => {
    const { name, image, chests, phrase, position, leg, patch, hand } = req.body;
    Random.create({
        name,
        image,
        chests,
        phrase,
        position,
        leg,
        patch,
        hand
    })
        .then(random => res.json(random))
        .catch(err => res.status(400).json(err));
};

module.exports.getHomepage = (req, res) => {
    Random.find()
        .then(randoms => res.json(randoms))
        .catch(err => res.json(err));
};
module.exports.homeRandom = (req, res) => {
    Random.find()
        .then(randoms => res.json(randoms))
        .catch(err => res.json(err));
};
module.exports.getAllRandoms = (req, res) => {
    Random.find()
        .then(randoms => res.json(randoms))
        .catch(err => res.json(err));
};
module.exports.getLyricsRandoms = (req, res) => {
    Random.find()
        .then(randoms => res.json(randoms))
        .catch(err => res.json(err));
};

module.exports.getOneRandom = (req, res) => {
    const {id} = req.params
    Random.findOne({ _id: id })
        .then(random => res.json(random))
        .catch(err => res.json(err));
};
module.exports.searchMusicRandom = (req, res) => {
    const {id} = req.params
    Random.findOne({ _id: id })
        .then(random => res.json(random))
        .catch(err => res.json(err));
};
module.exports.searchEntRandom = (req, res) => {
    const {id} = req.params
    Random.findOne({ _id: id })
        .then(random => res.json(random))
        .catch(err => res.json(err));
};
module.exports.getFavoritesRandom = (req, res) => {
    const {id} = req.params
    Random.findOne({ _id: id })
        .then(random => res.json(random))
        .catch(err => res.json(err));
};
module.exports.getMusicFavoritesRandom = (req, res) => {
    const {id} = req.params
    Random.findOne({ _id: id })
        .then(random => res.json(random))
        .catch(err => res.json(err));
};

module.exports.updateRandom = (req, res) => {
    const {id} = req.params
    Random.findOneAndUpdate({ _id: id }, req.body, { runValidators:true, new:true })
        .then(updatedRandom => res.json(updatedRandom))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteRandom = (req, res) => {
    const {id} = req.params
    Random.deleteOne({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
};