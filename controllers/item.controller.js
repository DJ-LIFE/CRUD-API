const Item = require('../models/product.model');

// Adding a item
const addItems = async (req, res) => {
    try{
        const item = await Item.create(req.body);
        res.status(200).json(item);
    } catch(error) {
        res.status(500).json({message: error})
    }
};

// Get all items
const getProducts = async (req, res) => {
    try{
        const items = await Item.find({});
        res.status(200).json(items);
    } catch(error) {
        res.status(500).json({message: error})
    }
}

// get Single Item
const getProduct =  async (req ,res) => {
    try{
        const {id} = req.params;
        const item = await Item.findById(id);
        res.status(200).json(item);
    } catch(error){
        res.status(500).json({message: error});
    }
}

// Updating a Item (we use put)
const updateItem = async (req ,res) => {
    try{
        const {id} = req.params;
        const item = await Item.findByIdAndUpdate(id, req.body);

        // Checking if the item in the Databse
        if(!item) {
            res.status(404).json({"message":"Product not Found"});
        }

        // Checking with our DataBase
        const updatedItem = await Item.findById(id);
        res.status(200).json(updatedItem);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
// Deleting an Item
const deleteItem = async (req, res) => {
    try{
        const {id} = req.params;
        const item = await Item.findByIdAndDelete(id);
        if(!item){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product deleted Successfully"})
    } catch(error){
        res.status(500).json({message: "Failed to delete the Item"})
    }
}

module.exports = {
    getProducts,
    getProduct,
    addItems,
    updateItem,
    deleteItem,
};