const { getAllProducts,  getOneProduct, deleteProduct, updateProduct, rabbitMq} = require('../controllers/productController');



const router = require('express').Router();

router.get('/product', getAllProducts)
// router.post('/', createProducts)
router.get('/:id', getOneProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)
router.post('/', rabbitMq)

module.exports = router;