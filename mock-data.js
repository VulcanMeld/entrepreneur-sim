const faker = require('faker')

const MOCK_USER_INFO = require('./mock-user-data')
const MOCK_COMPANY_INFO = require('./mock-company-data')


const addCompanyToUser = function (userId,companyObject) {
    let user;
    for(i=0; i< MOCK_USER_INFO.length; i++) {
        if(user[i].id == userId){
            return user = user[i]
        }

        else{
            return "Error. user not found"
        }
    }

    user.companies.push(companyObject)



}