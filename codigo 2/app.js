const fs = require('fs')
const getData = require('./apicall.js')
const template = require('./template.js')
const { nombreArchivo, extension, indicador, cantidad } = require('./args.js')

;(async () => {
	const data = await getData()
	const cambio = data[indicador].valor
	const total = (cantidad / cambio).toFixed(2)
	const date = new Date().toUTCString()
	const mensaje = template(date, cantidad, indicador, total)

	fs.writeFile(
		`${nombreArchivo}.${extension}`,
		mensaje,
		'utf8',
		() => {
			console.log(mensaje)
		}
	)
})()
