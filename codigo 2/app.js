const fs = require('fs')
const apicall = require('./apicall.js')
const template = require('./template.js')

;(async () => {
const argumentos = process.argv.slice(2)
const nombreArchivo = argumentos[0]
const extension = argumentos[1]
const indicador = argumentos[2]
const cantidad = argumentos[3]

	const data = await apicall.getData()
	const cambio = data[indicador].valor
   const total = (cantidad / cambio).toFixed(2)

   const date = new Date().toUTCString()

   const mensaje = template(date, cantidad, indicador, total);
   
   fs.writeFile(`${nombreArchivo}.${extension}`, mensaje, 'utf8', () => {
      console.log('Archivo creado con éxito')
   })
})()