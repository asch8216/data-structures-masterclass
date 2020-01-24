// function maxSubArray(arr, num) {
// 	let max = -Infinity
// 	for (let i = 0; i < arr.length - num + 1; i++) {
// 		let temp = 0
// 		for (let j = 0; j < num; j++) {
// 			temp += arr[i + j]
// 		}
// 		if (temp > max) {
// 			max = temp
// 		}
// 		console.log(temp, max)
// 	}
// 	return max
// }
// console.log('tot4', maxSubArray([1, 2, 5, 2, 8, 1, 5], 4)) //17

function maxSubArray(arr, num) {
	let maxSum = 0
	let tempSum = 0
	for (let i = 0; i < num; i++) {
		maxSum += arr[i]
	}
	tempSum = maxSum
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i]
		if (maxSum < tempSum) {
			maxSum = tempSum
		}
		console.log(maxSum, tempSum)
	}
	return maxSum
}
console.log('tot2', maxSubArray([1, 2, 5, 2, 8, 1, 5], 2)) //10
