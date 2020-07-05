"use strict";
// Напиши функцию calculateTotalPrice(allProducts, productName), которая 
// получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена * количество).

const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2
    },
];

// === через тернарный оператор ======
const calculateTotalPrice = function (allProducts, productName) {
    let totalPrice = 0;
    for (const product of allProducts) {
        const {
            name,
            price,
            quantity
        } = product;
        totalPrice = (product.name === productName) ? product.price * product.quantity : totalPrice
    };
    return totalPrice
};

//=== через for ======
// const calculateTotalPrice = function (allProducts, productName) {
//     let total = 0;
//     for (let i = 0; i < allProducts.length; i += 1) {
//         if (allProducts[i].name === productName) {
//             total = allProducts[i].price * allProducts[i].quantity
//         }
//     }
//     return total;
// };

//=== через for of ======
// const calculateTotalPrice = function (allProducts, productName) {
//     let total = 0;
//     for (const product of allProducts) {
//         //console.log(product.name);
//         //console.log(product.price);
//         //console.log(product.quantity)

//         if (product.name === productName) {
//             total = product.price * product.quantity;
//         }

//         //return productName + total
//     };
//     return total

//     // === решение через for но с выносом переменной ххх ========

//     //     for (let i = 0; i < allProducts.length; i += 1) {
//     //         const xxx = allProducts[i]; // переменная является текущим продуктом
//     //         if (allProducts[i].name === productName) { // если имя этого продукта === productName
//     //             total = xxx.price * xxx.quantity;
//     //         }
//     //     }
//     //     return total
// };

//=== через for of + деструктиризацию ======
// const calculateTotalPrice = function (allProducts, productName) {

//     let total = 0;

//     for (const product of allProducts) {
//         const {
//             name,
//             price,
//             quantity
//         } = product;

//         if (product.name === productName) {
//             total = price * quantity;
//         }
//     };
//     return total
// };

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

console.log(calculateTotalPrice(products, 'Сканер')); // 8100

console.log(calculateTotalPrice(products, 'Захват')); // 2400