"use strict";

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
console.log(user)

user.mood = 'happy';
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
    console.log(`key: ${key}, value: ${user[key]}`);
};