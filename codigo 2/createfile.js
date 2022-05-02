const fs = require('fs')

const createFileIfNotExist = (fileName, content) => {
	if (!fs.existsSync(fileName)) {
		try {
			fs.writeFile(fileName, content, 'utf8', () => {
				console.log(content)
				console.log(`File ${fileName} created`)
			})
		} catch (error) {
			console.log(error)
		}
	} else {
		console.log(`File ${fileName} already exists`)
	}
}
module.exports = createFileIfNotExist
