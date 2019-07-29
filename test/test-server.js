const express = require('express')

const {app,runServer,closeServer} = require("../server")

const mocha = require('mocha')

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(chaiHttp)

describe('Application Test', function (){


    before(function(){
        return runServer()
    })

    after(function(){
        return closeServer()
    })

    describe('Access the root' , function (){

        it('should return a 200 status code', function(){
            return chai.request(app)
            .get('/')
            .then(res => {
                expect(res).to.have.status(200)
            })
        })

    })

    describe('Access /login endpoint' , function (){

        it('should return a 200 status code', function(){
            return chai.request(app)
            .get('/login')
            .then(res => {
                expect(res).to.have.status(200)
            })
        })

        it('should return an HTML page' , function(){
            return chai.request(app)
            .get('/login')
            .then(res => {
                expect(res).to.be.html
            })
        })

    })

})