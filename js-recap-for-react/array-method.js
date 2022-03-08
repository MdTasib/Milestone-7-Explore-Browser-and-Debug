const products = [
	{ name: "hp laptop", price: 45000, brand: "hp", color: "silver" },
	{ name: "phone", price: 35000, brand: "apple", color: "golden" },
	{ name: "watch", price: 4000, brand: "apple", color: "black" },
	{ name: "bottol", price: 500, brand: "rfl", color: "red" },
	{ name: "phone", price: 20000, brand: "realme", color: "blue" },
];

// map
const productName = products.map(product => product.name);
// console.log(productName);

// forEach
// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.name));

// filter
const filterPrice = products.filter(product => product.price <= 5000);
// console.log(filterPrice);

const filterLetter = products.filter(product => product.name.includes("e"));
// console.log(filterLetter);

// find
const findPrice = products.find(product => product.price <= 5000);
// console.log(findPrice);
