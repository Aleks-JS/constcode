// Игрок может перемещать персонажа с помощью кнопок и стрелок на клавиатуре.
// Персонаж не может заходить на стены и за границу игрового поля.
// Кнопки с направлениями, которые не доступны для персонажа, заблокированны.

const matrix = getGameMap()

function getGameMap() {
	const map = []

	document
		.querySelectorAll('tr')
		.forEach((tr, y) =>

		)

	// for (const tr of document.querySelectorAll('tr')) {
	// 	for (const td of tr.querySelectorAll('td')) {

	// 	}
	// }
}


const matrix = [
	[(x:0, y:0), (x:1, y:0), (x:2, y:0)],
	[(x:0, y:1), (x:1, y:1), (x:2, y:1)],
	[(x:0, y:2), (x:1, y:2), (x:2, y:2)],
]
