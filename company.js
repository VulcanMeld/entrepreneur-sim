const express = require('express')
const companyRouter = express.Router()

loginRouter.get('/', (req,res) => {
    res.sendFile( __dirname + "/public/" + "company.html" )
})

module.exports = companyRouter