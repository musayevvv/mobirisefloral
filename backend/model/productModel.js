import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true })

const productModel = mongoose.model('Products', productSchema)

export default productModel 