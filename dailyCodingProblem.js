// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

const loopSum = (arr, num) => {
  let results = null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log("i:", i, "j:", j);
      if (arr[i] + arr[j] === num) {
        results = [
          {
            values: arr[i],
            index: i
          },
          {
            values: arr[j],
            index: j
          }
        ];
      } else {
        results = "We could not find a match";
      }
    }
  }
  return results;
};

console.log(loopSum([10, 15, 3, 7], 17));
