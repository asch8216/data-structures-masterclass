function multiDimSumArray(arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			sum += multiDimSumArray(arr[i])
		} else {
			sum += arr[i]
		}
	}
	return sum
}

let multi = [[1, 2, [3, [4, 5]]]]

let t1 = Date.now()
console.log(multiDimSumArray(multi))
let t2 = Date.now()
console.log('time elapsed:', (t2 - t1) / 100 + ' seconds')
