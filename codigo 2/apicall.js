const axi = require('axios')
const getData = async () =>{
	try {
		const { data } = await axi.get('https://mindicador.cl/api')
		return data
	} catch (err) {
		console.log(err)
	}
}

module.exports = getData
