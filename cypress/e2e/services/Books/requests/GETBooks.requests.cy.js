// verbo/metodo - endpoint . motivo (request) . extensao
/// <reference types="cypress" />

function allBooks() {
    // cy.request - client http - bate no endpoint e traz as inforamções para nós
    return cy.request({
        method: "GET",
        url: "https://fakerestapi.azurewebsites.net/api/v1/Books",
        failOnStatusCode: false, // cypress auxilia para quando uma req nao da 200 quebra o teste 
    })
}

export { allBooks };