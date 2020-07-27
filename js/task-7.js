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
        return this.transactions;
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
        return this.transactions;
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