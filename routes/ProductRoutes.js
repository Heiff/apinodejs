const {Router} = require('express');
const router = Router();

const {
    getAllProducts,
    getProductsById, 
    addProducts,
    updateProducts,
    removeProducts,
} = require('../controller/Controller')

router.get('/',getAllProducts)
router.post('/add', addProducts)
router.get('/:id', getProductsById)
router.put('/:id', updateProducts)
router.delete('/:id', removeProducts)


module.exports = router