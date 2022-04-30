const fs = require('fs')
const https = require('https')

const argumentos = process.argv.slice(2)
const nombreArchivo = argumentos[0]
const extension = argumentos[1]
const indicador = argumentos[2]
const cantidad = argumentos[3]

const date = new Date().toUTCString()

https
	.get('https://mindicador.cl/api', (resp) => {
		let data = ''
		resp.on('data', (chunk) => {
			data += chunk
		})
		resp.on('end', () => {
			// Paso 2
			let datos = JSON.parse(data)
			const cambio = datos[indicador].valor
			const total = (cantidad / cambio).toFixed(2)

         const mensaje = `A la fecha: ${date}
Fue realizada cotización con los siguientes datos:
Cantidad de pesos a convertir: ${cantidad} pesos
Convertido a ${indicador} da un total de:
$${total}`

         fs.writeFile(`${nombreArchivo}.${extension}`, mensaje, 'utf8', () => {
            console.log(mensaje)
         })
		})
	})
	.on('error', (err) => {
		console.log('Error: ' + err.message)
	})

