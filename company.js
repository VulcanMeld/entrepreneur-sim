const express = require('express')
const companyRouter = express.Router()

companyRouter.get('/', (req,res) => {
    res.sendFile( __dirname + "/public/" + "company.html" )
})

module.exports = companyRouter