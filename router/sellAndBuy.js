const express = require('express');
const SellBuy = require("../mongoose/models/sellBuy");


// setting up the router

const SellAndBuyRouter = new express.Router();

// code goes here for routes
SellAndBuyRouter.get('/', (req, res) => {
    res.send('Hello World!')
})
// exporting the router
module.exports = SellAndBuyRouter;
