function randomNum(min, max) {
	return Math.floor((Math.random() * (max - min))) + min
}

function randomID() {
	return new Date().getTime() + '' + Math.floor(Math.random() * 100)
}

export {
	randomID,
	randomNum
}