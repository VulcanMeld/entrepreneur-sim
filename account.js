const express = require('express')
const accountRouter = express.Router()

accountRouter.get('/', (req,res) => {
    res.sendFile( __dirname + "/public/" + "account.html" )
})

module.exports = accountRouter