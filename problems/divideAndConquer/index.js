function divideAndConquer(arr, num) {
	let middle = Math.floor(arr.length / 2)

	let left = arr.slice(0, middle)
	let right = arr.slice(middle)
	console.log('left', left)
	console.log('right', right)
	if (num === arr[middle]) return true
	else if (num < arr[middle]) {
		divideAndConquer(left, num)
	} else {
		console.log('inelse')
		divideAndConquer(right, num)
	}
}
divideAndConquer([1, 3, 5, 8, 11, 16, 17, 15, 22, 33, 45], 22)
