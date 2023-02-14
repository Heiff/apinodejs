const Product = require('../Modul/Modul');

const getAllProducts = async (req, res) => {
    try {
      const getAllProduct = await Product.find()
      res.status(200).json(getAllProduct)
    } catch (err) {
      res.send(err)
    }
  }

  const getProductsById = async (req, res) => {
    try {
      const getProduct = await Product.findById(req.params.id)
  
      if(!getProduct){
        return res.status(404).json({
          message: 'Not found'
        })
      }
  
      return res.status(200).json(getProduct)
    } catch (err) {
      res.send(err)
    }
  }

  const removeProducts = async (req, res) => {
    try {
      await Product.findByIdAndRemove(req.params.id)
  
      res.status(200).json({
        message: 'Deleted',
      })
    } catch (err) {
      res.send(err)
    }
  }

  const updateProducts = async (req, res) => {
    try {
      const { title,image,descr,price} = req.body
  
      const updatedProducts = await Product.findByIdAndUpdate(req.params.id, {
       title,
       image,
       descr,
       price
      })
  
      res.status(200).json(updatedProducts)
    } catch (err) {
      res.send(err)
    }
  }
  
  const addProducts = async (req, res) => {
    try {
      const {title,image,descr,price} = req.body
  
      const newProducts = await Product.create({
        title,
        image,
        descr,
        price
      })
  
      res.status(201).json(newProducts)
    } catch (err) {
      res.send(err)
    }
  }

  module.exports = {
    getAllProducts,
    getProductsById,
    addProducts,
    updateProducts,
    removeProducts,
  }