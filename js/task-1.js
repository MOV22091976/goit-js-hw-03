"use strict";
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    changesProperties(newPropertie) {
        this.hobby = newPropertie;
    },
};

user.changesProperties('skydiving');
console.log(user) // {name: "Mango", age: 20, hobby: "skydiving", premium: true, changesProperties: ƒ}

user.mood = 'happy';
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
    console.log(`key: ${key}, value: ${user[key]}`);
};