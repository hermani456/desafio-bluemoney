const getData = require('./apicall.js')
const createTemplate = require('./createtemplate.js')
const { nombreArchivo, extension, indicador, cantidad } = require('./args.js')
const createFileIfNotExist = require('./createfile.js')

;(async () => {
	const data = await getData()
	const cambio = data[indicador].valor
	const total = (cantidad / cambio).toFixed(2)
	const date = new Date().toUTCString()
	const mensaje = createTemplate(date, cantidad, indicador, total)

   createFileIfNotExist(`${nombreArchivo}.${extension}`, mensaje)
})()
