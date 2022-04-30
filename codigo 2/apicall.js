const axi = require('axios')
async function getData() {
	try {
		const { data } = await axi.get('https://mindicador.cl/api')
		return data
	} catch (err) {
		console.log(err)
	}
}

module.exports = {getData}
