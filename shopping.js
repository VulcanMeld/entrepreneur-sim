const express = require('express')
const shoppinhRouter = express.Router()

loginRouter.get('/', (req,res) => {
    res.sendFile( __dirname + "/public/" + "shopping.html" )
})

module.exports = shoppingRouter