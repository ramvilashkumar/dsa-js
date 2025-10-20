// . Write a function that takes input an array of distinct integers,
//  and returns the length of highest mountain.•
// A mountain is defined as adjacent integers that are strictly increasing until they reach a peak,
// at which the become strictly decreasing.•
// At least 3 numbers are required to form a mountain.

const findPeakMountain = (arr) => {
  let largest = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let count = 1;
      let j = i;

      //   backward count
      while (j >= 1 && arr[j] > arr[j - 1]) {
        count++;
        j--;
      }

      // forward count

      while (i <= arr.length - 2 && arr[i] > arr[i + 1]) {
        i++;
        count++;
      }

      largest = Math.max(count, largest);
    }
  }

  return largest;
};

const arr = [5, 6, 1, 2, 3, 4, 5, 4, 3, 2, 0, 1, 2, 3, -2, 4];

console.log(findPeakMountain(arr));
