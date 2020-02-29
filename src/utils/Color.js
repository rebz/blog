const AVAILABLE_COLORS = [
	'purple',
	'yellow',
	'orange',
	'red',
	'blue',
	'green',
	'pink',
]

const Color = {

	getRandomColor: function() {
		return AVAILABLE_COLORS[Math.floor(Math.random() * Math.floor(AVAILABLE_COLORS.length-1))]
	}
}

export {
	Color
}
