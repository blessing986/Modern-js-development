///////////////////////////////////////
// Exporting and Importing in ES6 Modules
// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

////////////////////////////////////
// Named export
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// Default export
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

///////////////////////////////////////
// Top-Level Await (ES2022)

// console.log('Start fetching');
// await keyword works outside an async function in module
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

// Top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
