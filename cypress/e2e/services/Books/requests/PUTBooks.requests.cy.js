/// <reference types="cypress"  />

const payloadEditBook = require('../payloads/edit-book.json')

function editBook (idBook) {
    return cy.request({
        method: 'PUT',
        url: `https://fakerestapi.azurewebsites.net/api/v1/Books/${idBook}`,
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: payloadEditBook
    })

}

export { editBook };