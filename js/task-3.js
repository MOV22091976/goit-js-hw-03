"use strict";

// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников 
// и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и количество выполненых задач содержатся как свойства объекта в 
// формате "имя": "количество задач".

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};

const findBestEmployee = function (employees) {
    let max = 0;
    let name;
    const entries = Object.entries(employees);

    for (const [key, value] of entries) {
        if (value > max) {
            max = value;
            name = key;
        }
    }
    return (`name: ${name}, numberTasks: ${max}`);
};

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // name: lorence, numberTasks: 99

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // name: mango, numberTasks: 17

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // name: lux, numberTasks: 147