const router = require('express').Router()
const multer = require('multer')
const productControllers =require('../controllers/product.controllers')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage })

router.get('/products', productControllers.getAllProduct)
router.get('/product/:id', productControllers.getOneProduct)
router.post('/product/',upload.single('image'), productControllers.postProduct)
router.patch('/product/:id', productControllers.patchProduct)
router.delete('/product/:id', productControllers.deleteProduct)


module.exports = router