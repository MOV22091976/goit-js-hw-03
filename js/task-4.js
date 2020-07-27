"use strict";

const countTotalSalary = function (employees) {
    let total = 0;
    const values = Object.values(employees);
    for (const value of values) {
        total += value;
    }
    return (`total: - ${total}`)
};

console.log(countTotalSalary({}));
console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
);

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
);