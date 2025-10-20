/* Approach 1- Using sorting

 1.First sort the array 
 2.Now keep on counting till it has the consecutive number and 
 3.If the next number is non-consecutive start treating the next element as part of new band
 4.Keep a track of of the longest band

        Time Complexity T = O(nlogn)+O(n)

 */

const getLongestbandWithSorting = (arr) => {
  arr.sort((a, b) => a - b);

  let longest = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let currLongest = 1;

    while (arr[i + 1] == arr[i] + 1) {
      currLongest++;
      i++;
    }

    longest = Math.max(currLongest, longest);
  }

  return longest;
};

/*
Approach - 2 - Without Sorting

1. Add the element in the set to do lookup if any element is present or not
2. Loop through all the element in the array
3. For each elemet in the array now check if it can be starting element of the band
  a. if currElemnt -1 => doesn't exists in the map then we can say its the 
      starting element of any band
  b. if the above cond is false that means its the middle element of any band
  c. Now if condition a is true need to perform the following operation
    i. keep on finding the next consective number in the set
    ii. keep on increasing the currentCount
    iii. At the end check if the currentCount > longestCount 
        A. if yes the update the longestCount = currentCount



        Time Complexity T = O(n)
*/

const longestBandWithoutSorting = (arr) => {
  const set = new Set(arr);
  let longestCount = 0;

  for (let num of arr) {
    // Check if this is the start of a sequence
    if (!set.has(num - 1)) {
      let currCount = 1;
      let currNum = num;
      while (set.has(currNum + 1)) {
        currNum++;
        currCount++;
      }
      longestCount = Math.max(longestCount, count);
    }
  }

  return longestCount;
};

const arr = [5, 1, 7, 2, 6, 4, 3, 0, 9, 10, 14, 12];

console.log(longestBandWithoutSorting(arr));
// console.log(getLongestbandWithSorting(arr));

/*


const longestBandWithoutSorting = (arr) => {
  // Using Set for O(1) lookup (equivalent to unordered_set in C++)
  const numSet = new Set(arr);
  let longest = 0;

  for (let num of arr) {
    // Check if this number is the start of a sequence
    // (i.e., num-1 is not in the set)
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      // Count consecutive numbers starting from this number
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      longest = Math.max(longest, currentLength);
    }
  }

  return longest;
};

// Alternative approach using Map (unordered_map equivalent)
const longestBandWithMap = (arr) => {
  // Using Map to track if numbers are visited
  const numMap = new Map();
  
  // Initialize all numbers as unvisited
  for (let num of arr) {
    numMap.set(num, false);
  }

  let longest = 0;

  for (let num of arr) {
    // Skip if already processed
    if (numMap.get(num)) continue;

    let currentLength = 1;
    
    // Count in both directions
    let left = num - 1;
    let right = num + 1;

    // Mark current number as visited
    numMap.set(num, true);

    // Extend left
    while (numMap.has(left)) {
      numMap.set(left, true);
      currentLength++;
      left--;
    }

    // Extend right
    while (numMap.has(right)) {
      numMap.set(right, true);
      currentLength++;
      right++;
    }

    longest = Math.max(longest, currentLength);
  }

  return longest;
};

// Using plain JavaScript object (another unordered map approach)
const longestBandWithObject = (arr) => {
  const numObj = {};
  
  // Create hash table
  for (let num of arr) {
    numObj[num] = true;
  }

  let longest = 0;

  for (let num of arr) {
    // Check if this is the start of a sequence
    if (!numObj[num - 1]) {
      let currentNum = num;
      let currentLength = 1;

      while (numObj[currentNum + 1]) {
        currentNum++;
        currentLength++;
      }

      longest = Math.max(longest, currentLength);
    }
  }

  return longest;
};

const arr = [5, 1, 7, 2, 6, 4, 3, 0, 9, 10, 14, 12];

console.log("Sorting approach:", getLongestbandWithSorting(arr));
console.log("Set approach:", longestBandWithoutSorting(arr));
console.log("Map approach:", longestBandWithMap(arr));
console.log("Object approach:", longestBandWithObject(arr));

*/
