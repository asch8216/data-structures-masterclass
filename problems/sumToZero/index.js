// function sumToZero(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === 0) {
// 				return [arr[i], arr[j]]
// 			}
// 		}
// 	}
// 	return undefined
// }

function sumToZero(arr) {
	let left = 0
	let right = arr.length - 1
	while (left < right) {
		if (arr[left] + arr[right] === 0) {
			return [arr[left], arr[right]]
		} else if (arr[left] + arr[right] < 0) {
			left++
		} else {
			right--
		}
	}
	// return undefined
}

console.log(sumToZero([-5, -4, -3, 0, 1, 2, 7]))
