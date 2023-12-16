const {Genre} = require('../models/models')
const ApiError = require('../error/ApiError');

class GenreController {
    async create(req, res) {
        const {name} = req.body
        const candidate = await Genre.findOne({where: {name}})
        if (candidate) {
            return next(ApiError.badRequest('Такой жанр уже существует'))
        }
        const genre = await Genre.create({name})
        return res.json(genre)
    }

    async getAll(req, res) {
        const genres = await Genre.findAll()
        return res.json(genres)
    }

}

module.exports = new GenreController()
