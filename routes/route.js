const { getAllProducts, getOneProduct, deleteProduct, updateProduct, rabbitMq, createProducts, getAllUsers} = require('../controllers/productController');
const Reviews = require('../controllers/reviewController');



const router = require('express').Router();

router.get('/', getAllProducts)
router.post('/',createProducts )
router.get('/:id', getOneProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)
router.post('/', rabbitMq)
router.post('/review', Reviews)
router.get('/users', getAllUsers)

module.exports = router;