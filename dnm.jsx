let a = 14

console.log(a)

for (i = 0; i < 5; i++) {
	console.log(i)
	let words = ['al', 'bul', 'gel', 'bul', 'kal', 'sal']
	console.log(words[i])
	let showWords = (word) => {
		mappedWords = words.map((word) => word + '1')
		console.log(mappedWords)
	}
}
showWords(words)
