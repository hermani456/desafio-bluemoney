const template = (date, cantidad, indicador, total) => {
	return `A la fecha: ${date}
   Fue realizada cotización con los siguientes datos:
   Cantidad de pesos a convertir: ${cantidad} pesos
   Convertido a ${indicador} da un total de:
   $${total}`
}

module.exports = template
