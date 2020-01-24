function reverse(str) {
	let x
	// add whatever parameters you deem necessary - good luck!
	if (str.length <= 1) {
		return str
	} else {
		x = reverse(str.slice(1)) + str[0]
	}
	console.log('x', x)
	if (x == str) {
		return true
	} else {
		return false
	}
}

// function reverse(str) {
// 	let newStr = ''
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		newStr += str[i]
// 	}
// 	if (newStr === str) {
// 		return true
// 	}
// 	return false
// }
console.log(reverse('kayak')) // 'kayak'
console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
