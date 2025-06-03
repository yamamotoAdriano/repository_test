import * as GETBooks from '../requests/GETBooks.requests.cy';

describe('GET Books', () => {
    it('Listar todos os livros ', () => {
        GETBooks.allBooks().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;        
        })
    });    
});