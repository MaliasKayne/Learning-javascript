// function calculatedDiscountedPrice(price, discountPercentage) {
//     const discount = (price * discountPercentage) / 100;
//     const priceWithDiscount = price - discount;

//     return priceWithDiscount;
// }

// const originalPrice = 100;
// const discountPercentage = 15;
// const finalPrice = calculatedDiscountedPrice(originalPrice, discountPercentage);

// console.log('Original Price: $' + originalPrice);
// console.log('Discount: ' + discountPercentage + '%');
// console.log('Price with Discount: $' + finalPrice);

// const rocket = {
//     name: "Falcon 9",
//     launchMessage: function() {
//         console.log("Launching " + this.name + "!");
//     }
// };

// rocket.launchMessage();

const newGreeting = (name) => {
    return `Hi, ${name}`;
}

const implicitGreeting = name => `Hello, ${name}`;

const greet = newGreeting("Alice");
const greet2 = implicitGreeting("Bob");

console.log(greet);
console.log(greet2);