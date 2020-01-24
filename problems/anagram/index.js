// function validAnagram(str1, str2) {
// 	// add whatever parameters you deem necessary - good luck!
// 	if (
// 		JSON.stringify(str1.split('').sort()) !==
// 		JSON.stringify(str2.split('').sort())
// 	) {
// 		console.log('str1', str1.split('').sort())
// 		console.log('str2', str2.split('').sort())
// 		return false
// 	}

// 	return true
// }

function validAnagram(str1, str2) {
	// add whatever parameters you deem necessary - good luck!
	if (str1.length !== str2.length) return false
	if (str1.length === 0 && str2.length === 0) return true
	let obj1 = {}

	for (let i = 0; i < str1.length; i++) {
		let letter = str1[i]
		if (obj1[letter]) {
			obj1[letter]++
		} else {
			obj1[letter] = 1
		}
	}
	for (let i = 0; i < str2.length; i++) {
		let letter = str2[i]
		if (!obj1[letter]) {
			return false
		} else {
			obj1[letter]--
		}
	}
	let values = Object.values(obj1)
	for (let i = 0; i < values.length; i++) {
		if (values[i] > 0) {
			return false
		}
		return true
	}
	// let total = values.reduce((init, iter) => {
	// 	return init + iter
	// })
	// if (total > 0) {
	// 	return false
	// }
	// return true
}

console.log(validAnagram('qwerty', 'ytrqwe')) //true
console.log(validAnagram('texttwisttime', 'timetwisttext')) //true
console.log(validAnagram('rat', 'car')) //false
console.log(validAnagram('', '')) //tru
