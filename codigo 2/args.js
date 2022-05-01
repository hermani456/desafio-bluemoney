const argumentos = process.argv.slice(2)
const nombreArchivo = argumentos[0]
const extension = argumentos[1]
const indicador = argumentos[2]
const cantidad = argumentos[3]

module.exports = { nombreArchivo, extension, indicador, cantidad }