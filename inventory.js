const express = require('express')
const inventoryRouter = express.Router()

loginRouter.get('/', (req,res) => {
    res.sendFile( __dirname + "/public/" + "inventory.html" )
})

module.exports = inventoryRouter