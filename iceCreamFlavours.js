const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

const clone = iceCreamFlavours.slice(0);

clone.push('root beer');

console.log(clone);

console.log(clone[0]);
console.log(clone[clone.length - 1]);
console.log(clone.length);