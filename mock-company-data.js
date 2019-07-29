const faker = require('faker')


let MOCK_COMPANY_DATA = {
    "companies": [
        {
            "companyName": faker.company.companyName(),
            "companyType": "manufacturer",
            "companyId": faker.random.uuid()
        },
        
        {
            "companyName": faker.company.companyName(),
            "companyType": "manufacturer",
            "companyId": faker.random.uuid()
        },

        {
            "companyName": faker.company.companyName(),
            "companyType": "manufacturer",
            "companyId": faker.random.uuid()
        }
    ]
}

module.exports = MOCK_COMPANY_DATA