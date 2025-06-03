import * as POSTBooks from '../requests/POSTBooks.requests.cy' ;

describe('POST Books', () => {
    it('Adicionar um novo livro', () => {
        POSTBooks.addBooks().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq("Livro");
        })
    });
    
});