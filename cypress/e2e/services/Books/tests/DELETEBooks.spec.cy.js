import * as DELETEBooks from '../requests/DELETEBooks.requests.cy' ;
import * as GETBooks from '../requests/GETBooks.requests.cy' ;
import * as POSTBooks from '../requests/POSTBooks.requests.cy';

describe('DELETE Books', () => {
    it('Deletar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            cy.log(resAllBooks.body[0].id)
            DELETEBooks.deleteBooks(resAllBooks.body[0].id).then((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    });

it('Criar e excluir', () => {
    POSTBooks.addBooks().then((resAddBook) => {
        DELETEBooks.deleteBooks(resAddBook.body.id).then((resDeleteBook) => {
            expect(resDeleteBook.status).to.eq(200);
        })
    })
    
});
});