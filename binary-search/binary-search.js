'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let middleIndex = Math.floor(array.length / 2)

	if (array.length <= 1) {
		return false;
	}

	let leftArr = array.slice(0, middleIndex)
	let rightArr = array.slice(middleIndex)

	if (array[middleIndex] === target) {
		return true;
	} else if (array[middleIndex] > target) {
		return binarySearch(leftArr, target)
	} else if (array[middleIndex] < target) {
		return binarySearch(rightArr, target)
	} 
	return false;
};


// const test1 = [1,3,4,5,11,12];
const test2 = [-3,-2,0, 9, 10, 11, 12, 15, 17, 18, 19, 20];
// const test3 = [-0.5, 0.03, 2.6, 3, 3.5, 3.777777, 5];
console.log(binarySearch(test2, -2)) // true
// console.log(binarySearch(test2, -3)) // true
// console.log(binarySearch(test3, 2.6)) // true

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch