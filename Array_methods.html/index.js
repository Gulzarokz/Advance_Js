// Array Methods

//1.push() Methods
//    def: Add one more elements to the end of the array.
// const fruits = ["Apple", "Orange"];
// console.log("Elements before push " , fruits);
// fruits.push("Banana", "Pear"); // add two or more elements to the end of the array
// console.table("Elements after push " , fruits);
//================================================================================================
//2.pop() Methods
//   def: Remove one or more elements from the end of the array and also return

// const fruits = ["Apple", "Orange", "Banana", "Pear"];
// console.log("Before pop " , fruits);
// const popFruits = fruits.pop();
// console.log("Elements after pop " ,fruits);
// console.log(popFruits);
//================================================================================================
//3.shift() Methods
//    def: Remove and return the first element of an array

// const fruits = ["Apple", "Orange", "Banana", "Pear"];
// console.log("Before shift " , fruits);
// const shiftFruits = fruits.shift();
// console.log("After shift " ,fruits);
// console.log(shiftFruits);
// ==================================================================================================
// 4.unshift() Methods
//    def: Add one or more elements at start/beganing of an array

// const fruits = ["Apple", "Orange", "Banana", "Pear"];
// console.log("Before unshift", fruits);
// fruits.unshift("Apricotes");
// console.log("After unshift", fruits);
// =====================================================================================================
// 5. concat() Methods
//    def: Merge two or more Array and returns a new Array

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combined = array1.concat(array2);
// console.log(combined);
// ========================================================================================================
// 6. slice() Methods
//    def: Extract the peace of an array and return a new Array without modifying original array

// const array1 = [1, 2, 3, 4, 5, 6];
// const sliced = array1.slice(1, 5);
// console.log(array1);
// console.log(sliced);
// ============================================================================================================
// 7. splice() Methods
//    def: Add remove or replace elements in an array

// const numbers = [1, 2, 3, 4, 5];
// // console.log(numbers);
// //  numbers.splice(2, 1, 100);
//  numbers.splice(2, 0, 100);
// console.log(numbers);
// ================================================================================================================
// 8.forEach() methods
  //def: is used to iterate over elements in an array. Execute a provided function once for each array elements

//   const numbers = [1, 2, 3, 4];

//   numbers.forEach((number)=>{
//     return numbers
//   });
//   console.log(numbers);

// indexof 
// const fruits = ["a", "b", "c", "d", "e"];
// fruits.forEach((fruits, index)=>{
//     console.log(`${index}: ${fruits}`);
    
// });
  

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.forEach((numbers,index, arr)=>{
//     arr[index] = numbers + 2;
// });
//    console.log(numbers);
   

// const users = [
//     { 
//       name: 'Alice',
//       age: 25 
//     },
//     { 
//         name: 'Bob',
//          age: 30
//      },
//     { 
//          name: 'Charlie',
//          age: 35
//      },
//   ];
//   users.forEach((item)=>{
//     console.log(`${item.name} ${item.age}`);
    
//   });
// //   console.log(users);
// =====================================================================================================
// 9.Map() method
  //  def: creating new array by applying a function to each element in array.Not chinging in existing array

  // const studentNames = ["Alice", "Bob", "Ali", "John", "Waqas"];
  // const newArray = studentNames.map((item, index)=>{
  //   // return item
  //   return index, item;
    

  // });
  // console.log(studentNames);
  
  // console.log(newArray);
    
  // // console.log(studentNames[0]);
  // // console.log(studentNames[3]);
  // console.log(studentNames[4]);
//  ===================================================================================================
// 10. Filter() Methods
      // def: to find out a specific index items
// const studentNames = ["alice", "Alice", "Bob", "kamran"];
// const filterStudent = studentNames.filter((item, index) =>{
//   // return student === "Bob";
//   return index === 3
  //  or 
    // const number = [1, 2, 3, 4]
  //   function fiter(item){
  //    return item % 2 === 0;
  //  }
//   const filter = number.filter(fiter);
//   console.log(filter);
  
// // }) 
//   console.log(filterStudent);
 

//   const filter = number.filter((item)=>{
//    return item % 2 == 0;
//   })
// console.log('The filterr item ',filter);
// ==========================================================================================
// 11. reduce() methods
  //  def:  reduce an array to a single value by applying function iteratively

  // const number = [1,2,3,4,5,6,7,8];
  // const sumOfNumbers = number.reduce((acc, curVal)=>{
  //   return  tot = acc + curVal;
  // });
  // console.log(sumOfNumbers);
  // ----------------------------------------------------
//  function sum (acc, curVal) {
//   return tot = acc + curVal;
//  }

//   const sumOfNumbers = number.reduce(sum);
//   console.log(sumOfNumbers);
  
  // ===========================================================================================

// 12. Find() methods
  // def: retrun the first elements of the array that satisfies the condition

  // const number = [1, 2, 3, 4, 5];
  // const findNumber = number.find((item)=>{
  //   return item > 3;
  // })
  // console.log(findNumber);
// ----------------------------------------------------------------------------------------------
// function findNumber(item) {
//   return item < 2;
// }
//  const found = number.find(findNumber);
//  console.log(found);
// //  ================================================================================================
// 13. FindIndex() Methods
  //  def: return the first index of the first element in the list satisfies the  conditions
 
  // const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const indexOfElement = number.findIndex((elements)=>{
  //   return elements > 5;
  // });
  // console.log(indexOfElement);
  // ==============================================================================================

  // 14. Every() Methods
    // def: Check every element in array pass the spacific condtion  and return blooen value
  // const number = [8, 2, 22, 4, 26];
  // const EvenNumber = number.every((item, index)=>{
  //   return item % 2 == 0;
  // })
  // console.log(EvenNumber);
  // // ==================================================================================================
  // 15. Some() Methods
    //  def: check at least on elements in the array passes the condition

    // const number = [1, 2, 3, 4, 5, 6, 7, 8];
    // const someNumber = number.some((item)=>{
    //   // return item === 3;
    //   return item === 12;
      
    // })
    // console.log(someNumber);
    
// ===================================================================================================
// 16. sort() Methods;
//  def: sort the elments in array in the ascending or desceinging orders
//  const number = [1, 2, 3, 4, 5, 6, 7, 8];
//  const sortNumber = number.sort((a,b)=> a > b ? 1 : -1);
//  console.log(sortNumber);

//  const string = ["a", "b", "c", "d", "e"]
// const sortString = string.sort((a, b) => a < b ? 1 : -1);
// console.log(sortString);
// =================================================================================================
// 17. revers() methods
  // def: reverse the order of the number in the list
  // const number = [1, 2, 3, 4, 5];
  // const reversNumber = number.reverse();
  // console.log(reversNumber);
  // =================================================================================================
  // 18.Include() Methods
  // def: check if an array include spacific elements
  //  const fruits = ["apple", "banana", "pear", "orange", ];
  //  const fruitsIncludes = fruits.includes("apple");
  //  console.log(fruitsIncludes);
  //  ===============================================================================================
  // 19.IndexOf() methods
    // def: return first index of spacified elements 

    // const number = [1, 2, 3, 4, 5, 6, 7, 8];
    // const indexOfNumber = number.indexOf(6);
    // console.log(indexOfNumber);
    // ==============================================================================================
    // 20. join(); methods
      // def: return new string with seprators

      // const string = ['a', 'b', 'c', 'd', 'e'];
      // const newString = string.join("_");
      // console.log(newString);
      // // ===============================================================================================