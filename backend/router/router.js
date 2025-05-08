import express from 'express'
import { deleteProducts, getProducts, postProducts } from '../controllers/productControllers.js'


const router = express.Router()

router
    .get('/', getProducts)
    .post('/', postProducts)
    .delete('/:id', deleteProducts)

export default router