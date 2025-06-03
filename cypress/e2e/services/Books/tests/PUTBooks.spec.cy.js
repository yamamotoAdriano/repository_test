import * as PUTBooks from '../requests/PUTBooks.requests.cy' ;
import * as POSTBooks from '../requests/POSTBooks.requests.cy';
import * as GETBooks from '../requests/GETBooks.requests.cy';

describe('PUT Books', () => {
    it('Alterar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            cy.log(resAllBooks.body[0].id)
            PUTBooks.editBook(resAllBooks.body[0].id).then((resEditBook) => {
                expect(resEditBook.status).to.eq(200);
                expect(resEditBook.body).to.be.not.null;
                expect(resEditBook.body.title).to.eq('Livro alterado');
            })
        })
    });

it('Criar e alterar o livro', () => {
    POSTBooks.addBooks().then((resAddBook) => {
        PUTBooks.editBook(resAddBook.body.id).then((resEditBook) => {
            expect(resEditBook.status).to.eq(200);
            expect(resEditBook.body).to.be.not.null;
            expect(resEditBook.body.title).to.eq('Livro alterado');
        })
    })
    
});
});