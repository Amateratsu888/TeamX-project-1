const router = require('express').Router()
const multer = require('multer')
const productControllers =require('../controllers/product.controllers')

//definition du chemin de destination et du nom du futur fichier à téléverser dans la base de donnée grace à MULTER
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/images')
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1]
        cb(null, file.fieldname + '-' + Date.now()+'.'+ext)
    }
})

// declaration du middleware 
var upload = multer({ storage: storage })


//endpoints mise en place pour product
router.get('/products', productControllers.getAllProduct)
router.get('/product/:id', productControllers.getOneProduct)
router.post('/product/',upload.single('image'), productControllers.postProduct)
router.patch('/product/:id', productControllers.patchProduct)
router.delete('/product/:id', productControllers.deleteProduct)

//exportation de nos routes
module.exports = router