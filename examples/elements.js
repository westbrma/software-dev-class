// often you will need to interact with elements in the HTML page

// get element by ID
let el = document.getElementById('some_element_id');

// get elements by selector (class, id, tagName)
let div_elements = document.querySelectorAll('div');

// get a single element by selector (class, id, tagName)
let single_div = document.querySelector('div');

// elements within other elements
let divs_within_some_element_id = el.querySelectorAll('div');

// get value from an element like input or select
let input_value = document.getElementById('some_input_id').value;

// set the value of an element
document.getElementById('some_input_id').value = 'hello world';

// change the inner text of an element
document.getElementById('some_label').innerText = 'hello world';

// change the inner HTML of an element
document.getElementById('some_div').innerHTML = '<a>CLICK ME!</a>';

// create a brand new element
let new_button = document.createElement('button');
new_button.innerText = 'Click Me';
// attach the new element to the body of the html page
document.body.appendChild(new_button);
// attach the new element to another element
single_div.appendChild(new_button);
