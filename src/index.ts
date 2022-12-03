import { Transaction } from "./models/Transaction";
import { Account } from "./models/Account";
const prompt = require("prompt-sync")();
const transact: Transaction = new Transaction(10000,new Date(),1,'expenditure',"Test transaction");
//console.log(transact)
//transact.testt();
const account = new Account( 100000,' HSBC ');
account.name = prompt("Enter the account name: ");
account.balance;
//console.log(account.name);
console.log(account.balance,account.id,account.name)