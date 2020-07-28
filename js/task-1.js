"use strict";

const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true,
};

user.mood = "happy";
user.premium = false;
user.hobby = "skydiving";

const keys = Object.keys(user);

for (const key of keys) {
    console.log(`key: ${key}, value: ${user[key]}`);
};