/* STEP 1: Basic browser functions
There are a number of functions that are included with most modern browsers - the replace() function is just one of many */
let text = "Functions are good.";
let newText = text.replace("good", "amazing");
console.log(text + " " + newText);

// Interestingly, functions that are included with your browser are technically called 'methods' rather than functions.

/* STEP 2: Anonymous versus named functions */

// Anonymous
const step2Button = document.querySelector("#step2");
console.log(step2Button);
// Named function
// step2Button.onClick = function () {
//   alert("Anonymos functin called");
// };

/* STEP 3: Function parameters
Some methods or functions don't require any parameters (sometimes called arguments, properties, or attributes), while some do, and others are optional. */
function step2Alert() {
  alert("Names function called");
}
step2Button.onclick = step2Alert;
// No parameters needed
let random = Math.random();
console.log(random);
// Two parameters needed
let functionText = "My random number is x.";
let newFunction = functionText.replace("x", random);
console.log(newFunction);
// Parameters optional
let lunchArray = ["Spicy", "Chatni", "Haluwa"];
let lunch = lunchArray.join(", ");
console.log(lunch);
// Next, open up scope.html and we will look at how the accessibility of variables depends on where they are defined/initialized.

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
