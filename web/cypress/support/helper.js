const pdf = require('pdf-parse')
const path = require('path')
const fs = require('fs')

const readPdf = (pathToPdf) => {      // Função para ler o conteúdo de um arquivo PDF está armazenado na const readPdf
    return new Promise((resolve) => {    // Retorna uma Promise que será resolvida com o conteúdo do PDF
        const pdfPath = path.resolve(pathToPdf)  // Resolve o caminho absoluto do arquivo PDF
        const pdfData = fs.readFileSync(pdfPath)  // Lê o conteúdo do arquivo PDF como um buffer
        pdf(pdfData)                            // Passa o buffer para a função pdf-parse, que extrai o texto do PDF
            .then(function ({ text }) {
                resolve(text)
            })

    })
}

module.exports = { readPdf }