const { exec } = require('child_process')

const argumentos = process.argv.slice(2)
const nombreArchivo = argumentos[0]
const extension = argumentos[1]
const indicador = argumentos[2]
const cantidad = argumentos[3]

exec(`node app.js ${nombreArchivo} ${extension} ${indicador} ${cantidad}`, (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`)
		return
	}
	console.log(`stdout: ${stdout}`)
})