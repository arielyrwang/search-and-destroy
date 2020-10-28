'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let startIndex = 0;
	let endIndex = array.length - 1;
	let middleIndex = Math.floor((startIndex + endIndex) / 2)

	if (array[startIndex] > array[endIndex]) {
		return false;
	}

	if (array[middleIndex] === target) {
		return true;
	} else if (array[middleIndex] > target) {
		return binarySearch(array, target)
	}
	return true;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch