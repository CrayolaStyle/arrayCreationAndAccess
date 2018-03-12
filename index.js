// 1. Define a variable called empty, assign an empty array literal to the variable
var empty = []
console.log(empty)


// 2. Define a variable called people, assign an array literal with the names of all the people sitting near you
var people = ["there","are", "no","people","near", "me"]

// 3. Define a variable called many, assign an array literal with examples of all 5 primitive types inside of it
var many = [true,"strings",100,null,undefined]

// 4. Define a variable called numbers, assign an array literal with all of your favorite number inside of it
var numbers = [1,13,7,1000,45]

// 5. Log the length of all of the above variables, one after another
console.log("empty length value", empty.length)
console.log("people length value", people.length)
console.log("many length value", many.length)
console.log("numbers length value", numbers.length)

// ACCESSING ARRAYS

// 6. Log each element in the following array

var instructors = ['CJ', 'Casey', 'Kim', 'Kyle']
console.log(instructors[0])
console.log(instructors[1])
console.log(instructors[2])
console.log(instructors[3])



// 7. Write the code to overwrite the number 13 with 42 in the following array

var numbers = [4, 8, 15, 16, 23, 13]
numbers[5] = 42
console.log("is this correct?", numbers[5])


// 8. What will log to the console?

var animals = ['dog', 'cat', 'bird', 'mouse'];

console.log(animals[1]); // What will log to the console "cat"
console.log(animals[3]); // What will log to the console "mouse"
console.log(animals[0]); // What will log to the console "dog"
console.log(animals[2]); // What will log to the console "brid"

// 9. What will log to the console?

var books = ['JavaScript: The Good Parts', 'Eloquent JS', 'You Don\'t Know JS'];
let i = 0

console.log(books[i]); // What will log to the console? 'JavaScript: The Good Parts'
// current value of i = 0
i++;
// current value of i = 1
console.log(books[i]); // What will log to the console? 'Eloquent JS'
// current value of i = 1
i++;
// current value of i = 2
console.log(books[i]); // What will log to the console? 'You Don\'t Know JS'

// 10. What will log to the console?

var states = ['Colorado', 'Texas', 'California', 'New York'];
console.log(states[2])
states[2] = 'Florida'

console.log(states); // What will log to the console?
// ['Colorado', 'Texas', 'Florida', 'New York'];