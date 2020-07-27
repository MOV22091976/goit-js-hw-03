"use strict";

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

console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));

console.log(calculateTotalPrice(products, 'Сканер'));

console.log(calculateTotalPrice(products, 'Захват'));