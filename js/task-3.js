"use strict";

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};

const findBestEmployee = function (employees) {
    let max = 0;
    let name;

    for (const key in employees) {
        if (employees[key] > max) {
            max = employees[key];
            name = key;
        }
    }
    return (`${name}`);
}

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
);

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
);

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
);