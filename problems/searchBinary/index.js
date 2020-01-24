function searchBinary(arr, val) {
	let start = 0
	let end = arr.length - 1
	let middle = Math.floor(start + end / 2)

	while (arr[middle] !== val && start <= end) {
		if (val < arr[middle]) {
			end = middle - 1
		} else {
			start = middle + 1
		}
		middle = Math.floor((end + start) / 2)
	}
	if (arr[middle] === val) {
		return middle
	} else {
		return -1
	}
}

console.log(searchBinary([2, 3, 4, 5, 7, 8, 9, 14], 4))
