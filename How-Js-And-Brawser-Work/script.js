// //////////
// setTimeout simple Asynchronous JS using
function hello() {
	console.log("Hello world");
}

/* console.log("I am number 1");
console.log("I am number 2");
hello();
console.log("I am number 3"); */

/* console.log("I am number 1");
console.log("I am number 2");
setTimeout(hello);
console.log("I am number 3"); */

/* console.log("I am number 1");
console.log("I am number 2");
setTimeout(function () {
	console.log("setTime out function runing");
});
console.log("I am number 3"); */

/* console.log("I am number 1");
console.log("I am number 2");
// setTimeout(function () {
// 	console.log("setTime out function runing");
// });
setTimeout(hello, 4000);
setTimeout(() => console.log("arrow function running"), 3000);
console.log("I am number 3");
 */

// ////////////////////////////
// Recognize fetch as an Asynchronous activity
/* console.log(1);
console.log(2);

fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then(response => response.json())
	.then(json => console.log(json));

// async function dataLoad() {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// 	const data = await response.json();
// 	console.log(data);
// }

// dataLoad();

console.log(3);
console.log(4);

for (let i = 0; i < 1000; i++) {
	console.log(i);
}
 */

//////////////////////////////////////
// setInterval and clearInterval with x++ and ++x

/* let second = 0;
setInterval(() => {
	// console.log(second++);
	console.log(++second);
}, 1000); */

/* let time = 0;
let timeing = setInterval(() => {
	console.log(time++);

	if (time > 5) {
		clearInterval(timeing);
	}
}, 1000);
 */
