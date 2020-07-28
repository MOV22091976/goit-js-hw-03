"use strict";

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,

    transactions: [],

    createTransaction(amount, type) {
        const id = this.transactions.length + 1
        return {
            id,
            type,
            amount,
        }
    },

    deposit(amount) {
        this.balance += amount;
        const addTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(addTransaction);
    },

    withdraw(amount) {
        let message = `Cнятие ${amount} не возможно, недостаточно средств`;
        if (this.balance < amount) {
            console.log(message);
            return;
        }
        this.balance -= amount;
        const addTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(addTransaction);
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (id === transaction.id) {
                return transaction;

            }
        }
    },

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

account.balance = 30000; // положили на баланс 30000
console.log(account.getBalance()); // проверили баланс 30000
account.withdraw(50000); // cнятие 50000 не возможно, недостаточно средств
account.withdraw(1000); // cнятие 1000
console.log(account.getBalance()); // проверили баланс 29000
console.log(account.createTransaction(5000, 'deposit')); // положили на депозит 5000
console.log(account.createTransaction(7000, 'deposit')); // положили на депозит 7000
account.deposit(333); // положили на баланс 333
console.log(account.getBalance()); // проверили баланс 29333
console.log(account.getTransactionDetails(2)); // {id: 2, type: "deposit", amount: 333}
console.log(account.getTransactionTotal('deposit')); // 333