const Product = require('../model/model')

module.exports = {
    getAllProducts: async(req, res) => {
        try {
            const results = await Product.find();
            res.send(results)
        } catch (error) {
            console.log(error.message)
        }
    },
    createProduct: async (req, res) => {
        try {
            const product = new Product(req.body);
            const result = await product.save();
            res.send(result)
        } catch (error) {
            console.log(error.message)
        }
        // const product = new Product({
        //     name: req.body.name,
        //     price: req.body.price
        // });
        // product
        // .save()
        // .then(result => {
        //     console.log(result);
        //     res.send(result);                                           
        // })
        // .catch(err => console.log(err.message)); 
    },
    getProduct: async(req, res) => {
        const id = req.params.id;
        try {
            const product = await Product.findById(id);
            res.send(product)
        } catch (error) {
            console.log(error.message)
        }
    },
    updateProduct: async (req, res) => {
        try {
            const id = req.params.id;
            const updates = req.body;
            const options = {new: true}
    
            const product = await Product.findByIdAndUpdate(id, updates, options);
            res.send(product)
        } catch (error) {
            console.log(error.message)
        }
    },
    deleteProduct: async (req, res) => {
        const id = req.params.id;
        try {
            const product = await Product.findByIdAndDelete(id);
            res.send(product)
        } catch (error) {
            console.log(error.message)
        }
    }
}