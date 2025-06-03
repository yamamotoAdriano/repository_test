/// <reference types="cypress"/>

function deleteBooks (idBook) {
    return cy.request({
        method: 'DELETE',
        url: `https://fakerestapi.azurewebsites.net/api/v1/Books/${idBook}`,
        failOnStatusCode: false
    })

}

export { deleteBooks };