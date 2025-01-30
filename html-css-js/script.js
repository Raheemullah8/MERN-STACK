const numbers = [10, 20, 30];

// Destructuring array
const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

const user = {
  name: "Ali",
  age: 25,
  city: "Karachi",
};

//####################################################

// Destructuring object
const { name, age, city } = user;

console.log(name); // "Ali"
console.log(age); // 25
console.log(city); // "Karachi"

//####################################################

const colors = ["Red", "Green", "Blue", "Yellow"];

// Destructuring with rest operator
const [first, second, ...rest] = colors;

console.log(first); // "Red"
console.log(second); // "Green"
console.log(rest); // ["Blue", "Yellow"]

//####################################################

//forEach ek loop jaisa kaam karta hai jo array ke har element par ek function apply karta hai.
//Lekin ye koi naya array return nahi karta, sirf existing array ke elements par kaam karta hai.
const numbers1 = [10, 20, 30];

numbers1.forEach(function(num) {
  console.log(num * 2);
});

const fruits = ["Apple", "Mango", "Banana"];

fruits.forEach(fruit => console.log(fruit));

//#####################################################

//Example: Difference in Action

const numbers2 = [1, 2, 3];
// Using forEach
const result1 = numbers2.forEach(num => num * 2);
console.log(result1); // undefined

// Using map
const result2 = numbers2.map(num => num * 2);
console.log(result2); // [2

//#########################################################

//JavaScript filter() Method
//filter() method array ke elements ko filter karne ke liye use hota hai.
// Ye ek naya array return karta hai jo sirf un elements ko rakhta hai jo ek 
// specific condition ko meet karte hain.

const names = ["Ali", "Ahmed", "Sara", "Zain", "Hassan"];

names.filter((value)=>{
if(value === "Ali"){
    return true
}
})
