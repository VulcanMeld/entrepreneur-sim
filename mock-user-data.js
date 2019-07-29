const faker = require('faker')
const MOCK_COMPANY_DATA = require('./mock-company-data')

let MOCK_USER_INFO = {
    "userInfo": [
        {
            "id":faker.random.uuid(),
            "type": "student",
            "userName": faker.internet.userName(),
            "password": faker.internet.password(),
            "firstName": faker.name.firstName(),
            "lastName": faker.name.lastName(),
            "email":faker.internet.email(),
            "companies": [
                {
                    "companyName": faker.company.companyName(),
                    "companyType": "manufacturer"
                },

                {
                    "companyName": faker.company.companyName(),
                    "companyType": "manufacturer"
                },

                {
                    "companyName": faker.company.companyName(),
                    "companyType": "manufacturer"
                }
            ],
            "funds":faker.finance.amount(),
            "inventory": [
                {
                    "itemName": faker.commerce.productName(),
                    "price": faker.commerce.price()
                },

                {
                    "itemName": faker.commerce.productName(),
                    "price": faker.commerce.price()
                },

                {
                    "itemName": faker.commerce.productName(),
                    "price": faker.commerce.price()
                }
            ]
        },

        {
            "id":faker.random.uuid(),
            "type": "student",
            "userName": faker.internet.userName(),
            "password": faker.internet.password(),
            "firstName": faker.name.firstName(),
            "lastName": faker.name.lastName(),
            "email":faker.internet.email(),
            "companies": [
                {
                    "companyName": faker.company.companyName(),
                    "companyType": "manufacturer"
                },

                {
                    "companyName": faker.company.companyName(),
                    "companyType": "manufacturer"
                },

                {
                    "companyName": faker.company.companyName(),
                    "companyType": "manufacturer"
                }
            ],
            "funds":faker.finance.amount(),
            "inventory": [
                {
                    "itemName": faker.commerce.productName(),
                    "price": faker.commerce.price()
                },

                {
                    "itemName": faker.commerce.productName(),
                    "price": faker.commerce.price()
                },

                {
                    "itemName": faker.commerce.productName(),
                    "price": faker.commerce.price()
                }
            ]
        },

        {
            "id":faker.random.uuid(),
            "userName": faker.internet.userName(),
            "password": faker.internet.password(),
            "firstName": faker.name.firstName(),
            "lastName": faker.name.lastName(),
            "email":faker.internet.email(),
            "companies": [
                {
                    "companyName": faker.company.companyName(),
                    "companyType": "manufacturer"
                },

                {
                    "companyName": faker.company.companyName(),
                    "companyType": "manufacturer"
                },

                {
                    "companyName": faker.company.companyName(),
                    "companyType": "manufacturer"
                }
            ],
            "funds":faker.finance.amount(),
            "inventory": [
                {
                    "itemName": faker.commerce.productName(),
                    "price": faker.commerce.price()
                },

                {
                    "itemName": faker.commerce.productName(),
                    "price": faker.commerce.price()
                },

                {
                    "itemName": faker.commerce.productName(),
                    "price": faker.commerce.price()
                }
            ]
        }
    ]
}

module.exports = MOCK_USER_INFO