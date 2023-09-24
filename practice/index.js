// function reverseArray(n, arr) {
//   let reverseArr = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
//   }

//   return reverseArr;
// }

// let n = 5;
// let arr = [12, 9, 1, 8];

// let reversed = reverseArray(n, arr);
// console.log(reversed);
// // Output: [8, 1, 9, 12]

// /* example for the prototype */
// const prototype = {
//   name: "Yogesh",
// };

// const newPrototype = {
//   sum: () => {
//     // const numOne = 3;
//     console.log(3);
//     // alert("hello");]
//     console.log(prototype.name);
//   },
// };

// prototype.__proto__ = newPrototype;

// console.log(prototype.sum());

// // Create a function that returns a Promise

// function fetchData() {
//   // Simulating an asynchronous operation, like fetching data from an API
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "John", age: 30 };
//       // Simulate a successful response
//       // Resolve the Promise with the data
//       // resolve(data);

//       // If there was an error, you can reject the Promise like this:
//       reject(new Error("Failed to fetch data"));
//     }, 2000); // Simulating a delay of 2 seconds
//   });
// }

// // Using the Promise
// fetchData()
//   .then((data) => {
//     console.log("Data fetched successfully:", data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error.message);
//   });

function areAnagram(str1, str2) {
  // Get lengths of both strings
  let n1 = str1.length;
  let n2 = str2.length;

  // If length of both strings is not
  // same, then they cannot be anagram
  if (n1 != n2) return false;

  // Sort both strings
  str1.sort();
  str2.sort();

  // Compare sorted strings
  for (let i = 0; i < n1; i++) if (str1[i] != str2[i]) return false;

  return true;
}

// Driver Code
let str1 = ["t", "e", "s", "t"];
let str2 = ["t", "t", "e", "w"];

areAnagram(str1, str2);
