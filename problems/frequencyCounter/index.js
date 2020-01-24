//write a function called sameFrequency. Given two positive integers find out if the two numbers have the same frequency of digits

function sameFrequency(num1, num2) {
	num1 = num1.toString()
	num2 = num2.toString()
	if (num1.length !== num2.length) return false
	let obj = {}
	for (let i = 0; i < num1.length; i++) {
		if (!obj[num1[i]]) {
			obj[num1[i]] = 1
		} else {
			obj[num1[i]]++
		}
	}
	for (let i = 0; i < num2.length; i++) {
		if (!obj[num2[i]]) {
			return false
		} else {
			obj[num2[i]]--
		}
	}
	let total = Object.values(obj).reduce((item, iter) => {
		return item + iter
	})
	if (total === 0) {
		return true
	} else {
		return false
	}
}

console.log(sameFrequency(1825, 5281)) //true

console.log(sameFrequency(345, 14)) //fa;se
