const { exec } = require('child_process')
exec('node app.js dolar txt dolar 856.58', (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`)
		return
	}
	console.log(`stdout: ${stdout}`)
	console.error(`stderr: ${stderr}`)
})
