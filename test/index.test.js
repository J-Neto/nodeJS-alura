const pegaArquivo = require('../index2');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () =>{
        expect(typeof pegaArquivo).toBe('function');
    })

    it('deve retornar array com resultados', async () =>{
        const resultado = await pegaArquivo('C:/Projects/Projetos avulsos/alura/nodejs-alura/lib-markdown/test/texto1.md');
        expect(resultado).toEqual(arrayResult);
    })

    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('C:/Projects/Projetos avulsos/alura/nodejs-alura/lib-markdown/test/texto1_sem_link.md');
        expect(resultado).toBe('Não há links');
    })
})