const pegaArquivo = require('./index2');
const chalk = require('chalk');
const validaURLs = require('./http-validacao');

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow('Links validados'), await validaURLs(resultado));
    } else {
        console.log(chalk.yellow('Lista de links'), resultado);
    }
}

processaTexto(caminho);