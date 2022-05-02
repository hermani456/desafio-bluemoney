const { exec } = require('child_process')
const { nombreArchivo, extension, indicador, cantidad } = require('./args.js')

exec(`node app.js ${nombreArchivo} ${extension} ${indicador} ${cantidad}`, (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`)
		return
	}
	console.log(stdout)
	console.error(stderr);
})