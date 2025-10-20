/*
 * Problem: Three Sum (Triplets)
 *
 * Given an array of integers and a target sum, find all unique triplets
 * in the array that sum up to the target value.
 *
 * Example:
 * Input: arr = [1, 8, 3, 7, 9, 2, 5, 6, 11, 4], target = 12
 * Output: All triplets [a, b, c] where a + b + c = 12
 *
 * Approach:
 * 1. Sort the array
 * 2. For each element, use two-pointer technique to find pairs
 * 3. Skip duplicates to ensure unique triplets
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1) excluding the output array
 */

const findTriplets = (arr, targetSum) => {
  const triplets = [];

  //First sort the array
  arr.sort((a, b) => a - b);

  // Apply two pointer approach

  for (let i = 0; i < arr.length - 2; i++) {
    // Skip duplicates for the first element
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let currTarget = targetSum - arr[i];
    let left = i + 1,
      right = arr.length - 1;

    while (left < right) {
      const currSum = arr[left] + arr[right];

      if (currSum === currTarget) {
        triplets.push([arr[i], arr[left], arr[right]]);

        // Skip duplicates for left and right pointers
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;

        left++;
        right--;
      } else if (currSum > currTarget) {
        right--;
      } else {
        left++;
      }
    }
  }

  return triplets;
};

const arr = [1, 8, 3, 7, 9, 2, 5, 6, 11, 4];

console.log(findTriplets(arr, 12));
