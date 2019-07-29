const express = require('express')
const shoppingRouter = express.Router()

shoppingRouter.get('/', (req,res) => {
    res.sendFile( __dirname + "/public/" + "shopping.html" )
})

module.exports = shoppingRouter