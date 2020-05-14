const router= require('express').Router()

const {
    getProducts,
    getProduct,
}=require('../controllers/producthunt')

router.get('/:topic',getProducts)
router.get('/tool/:id',getProduct)



module.exports=router
