const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


//const Product = require('./models/product');
//*************************************************************************************************************************
//Terminal setup
// npm i express mongoose ejs
//npm i method-override
//nodemon index.js

//*************************************************************************************************************************
//Everything for connecting mongoose
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })
//*************************************************************************************************************************
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'))

// const categories = ['fruit', 'vegetable', 'dairy'];

// app.get('/home', (req, res)=>{
//     res.render('demo')
// })
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/home', (req, res)=>{
    res.render('demo')
})

// app.get('/products', async (req, res) => {          //showing products
//     const { category } = req.query;
//     if (category) {
//         const products = await Product.find({ category }) //showing products with a query
//         res.render('products/index', { products, category })
//     } else {
//         const products = await Product.find({})
//         res.render('products/index', { products, category: 'All' }) //showing all products
//     }
// })

// app.get('/products/new', (req, res) => { //The html page takes all the info and gives a post request 
//     res.render('products/new', { categories })
// })

// app.post('/products', async (req, res) => { //It takes the post request and forms new products
//     const newProduct = new Product(req.body);
//     await newProduct.save();
//     res.redirect(`/products/${newProduct._id}`)
// })

// app.get('/products/:id', async (req, res) => { //finds products by id
//     const { id } = req.params;
//     const product = await Product.findById(id)
//     res.render('products/show', { product })
// })
// app.get('/products/:id/edit', async (req, res) => { //takes to a html page where all the info is taken and a put request is send
//     const { id } = req.params; 
//     const product = await Product.findById(id);
//     res.render('products/edit', { product, categories })
// })

// app.put('/products/:id', async (req, res) => { // put request is send by taking all the info
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
//     res.redirect(`/products/${product._id}`);
// })

// app.delete('/products/:id', async (req, res) => { // gets info from the show html page
//     const { id } = req.params;
//     const deletedProduct = await Product.findByIdAndDelete(id);
//     res.redirect('/products');
// })



app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})
