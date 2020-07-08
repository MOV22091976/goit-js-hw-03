"use strict";
//=== Напиши скрипт управления личным кабинетом интернет банка. === 
// Есть объект account в котором необходимо реализовать методы для 
// работы с балансом и историей транзакций.
//  Типов транзацкий всего два. Можно положить либо снять деньги со счета.
const Transaction = {
    DEPOSIT: 'deposit', // положить деньги
    WITHDRAW: 'withdraw', // снять деньги
};
//  Каждая транзакция это объект со свойствами: id, type и amount

const account = {
    balance: 0, // Текущий баланс счета

    transactions: [], // История транзакций

    // Метод создает и возвращает объект транзакции. Принимает сумму и тип транзакции.
    createTransaction(amount, type) {
        const id = this.transactions.length + 1
        return {
            id,
            type,
            amount,
        }
    },

    // Метод отвечающий за добавление суммы к балансу. Принимает сумму транзакции.
    //  Вызывает createTransaction для создания объекта транзакции
    //  после чего добавляет его в историю транзакций
    deposit(amount) {
        this.balance += amount;
        const addTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(addTransaction);
        return this.transactions;
    },

    // Метод отвечающий за снятие суммы с баланса. Принимает сумму транзакции.
    // Вызывает createTransaction для создания объекта транзакции
    // после чего добавляет его в историю транзакций.
    // Если amount больше чем текущий баланс, выводи сообщение - снятие такой суммы не возможно, недостаточно средств.
    withdraw(amount) {
        let message = `Cнятие ${amount} не возможно, недостаточно средств`;
        if (this.balance < amount) {
            console.log(message);
            return;
        }
        this.balance -= amount;
        const addTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(addTransaction);
        return this.transactions;
    },

    getBalance() { // Метод возвращает текущий баланс
        return this.balance;
    },

    getTransactionDetails(id) { // Метод ищет и возвращает объект транзации по id
        for (const transaction of this.transactions) {
            if (id === transaction.id) {
                return transaction;
            }
        }
    },

    //Метод возвращает количество средств определенного типа транзакции из всей истории транзакций
    getTransactionTotal(type) {
        let totalAmount = 0;
        for (const transaction of this.transactions) {
            if (type === transaction.type) {
                totalAmount += transaction.amount;
            }
        }
        return totalAmount;
    },
};

account.balance = 3000; // положили на баланс 3000
console.log(account.getBalance()); // вернули текущий баланс 3000
console.table(account.deposit(1000)); // положили 1000 на депозит
account.withdraw(5000); // cнятие 5000 не возможно, недостаточно средств
console.table(account.deposit(3000)); // положили 3000 на депозит
console.table(account.withdraw(500)); // сняли с депозита 500
console.log(account.getTransactionDetails(2)); // {id: 2, type: "deposit", amount: 3000}
console.log(account.getBalance()); // 6500
console.log(account.getTransactionTotal('deposit')); // 4000 - всего положили на депозит
console.log(account.getTransactionTotal('withdraw')); // 500 - всего снимали с депозита