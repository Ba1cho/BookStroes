const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const autorRouter = require('./autorRouter')
const genreRouter = require('./genreRouter')

router.use('/user', userRouter)
router.use('/type', genreRouter)
router.use('/brand', autorRouter)
router.use('/device', deviceRouter)

module.exports = router
