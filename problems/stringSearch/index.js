function stringSearch(str1, str2) {
	let count = 0
	for (let i = 0; i < str1.length; i++) {
		for (let j = 0; j < str2.length; j++) {
			console.log(str1[i + j], str2[j])
			if (str1[i + j] !== str2[j]) {
				console.log('BREAK!')
				break
			}
			if (j === str2.length - 1) {
				console.log('FOUND ONE')
				count++
			}
		}
	}
	return count
}

console.log(stringSearch('fkomgomgomflomg', 'pop'))
