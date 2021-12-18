const router = require("express").Router()
const usersControllers = require("../controllers/user.controllers")


router.get('/users', usersControllers.getAllUsers)
router.get('/user/:id', usersControllers.getOneUser)
router.post('/user', usersControllers.postUser)
router.delete('/user/:id', usersControllers.deleteUser)
router.patch('/user/:id', usersControllers.patchUser)



module.exports = router