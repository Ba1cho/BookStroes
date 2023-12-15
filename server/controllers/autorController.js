const {Autor} = require('../models/models')
const ApiError = require('../error/ApiError');

class AutorController {
    async create(req, res) {
        
        const {name} = req.body
        const candidate = await Autor.findOne({where: {name}})
        if (candidate) {
            return next(ApiError.badRequest('Такой автор уже существует'))
        }
        const autor = await Autor.create({name})
        return res.json(autor)
    }

    async getAll(req, res) {
        const autors = await Autor.findAll()
        return res.json(autors)
    }

}

module.exports = new AutorController()
