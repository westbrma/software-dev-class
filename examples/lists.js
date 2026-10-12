// lists (array) are useful for working with a collection values or objects

// an array of strings
const fruit = ['apples', 'oranges', 'pears'];

// an array of numbers
const number_list = [5, 4, 3, 2, 1];

// a list of objects
const list = [
	{ name: 'Apple', count: 5 },
	{ name: 'Orange', count: 5 },
	{ name: 'Pear', count: 5 }
];

// loop a list (do something for each item)
let sum = 0;
for (let item of list) {
	sum += item.count;
}

// you can refer to an item in a list by index, indexes start at 0
let second_fruit = fruit[1];

// list varibles and be added to
fruit_list.push('plums');

// find index of an item
let index = fruit.indexOf('Orange');

// remove item in a list by index
list.splice(index, 1);

// return a random item in a list
function get_random_item(list) {
	return list[Math.floor(Math.random() * list.length)];
}

let random_fruit = get_random_item(fruit);

// arrays hav many functions
alert(fruit.join(', ')); // Apple, Orange, Pear

// see if an item is in a list
let apple_is_in_the_list = fruit.includes('Apple');

// create a new list by adding a list to existing list
let new_list_with_more_items = fruit.concat(['banana', 'pear']);

// check if every item in a list meets a condition
let all_items_start_with_a = fruit.every((i) => i.startsWith('A'));

// create a new list of items that meet a condition
let new_list = fruit.filter((i) => i.startsWith('A'));

// do something for each item in a list
fruit.forEach((i) => alert(i));

//- map()

// see if one or more items in a list meet a condition
let some_items_include_a = fruit.some((i) => i.includes('a'));

// remove items in a list by index
fruit.splice(0, 1);

// sort a list
fruit.sort();
