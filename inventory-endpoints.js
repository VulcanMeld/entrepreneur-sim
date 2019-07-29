const express = require('express')
const inventoryRouter = express.Router()

inventoryRouter.get('/', (req,res) => {
    res.sendFile( __dirname + "/public/" + "inventory.html" )
})

module.exports = inventoryRouter