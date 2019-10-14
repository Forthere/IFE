function randomID() {
	return new Date().getTime() + '' + Math.floor(Math.random() * 100)
}

export {
	randomID
}