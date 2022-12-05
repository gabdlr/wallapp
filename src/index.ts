import { Transaction } from "./models/Transaction";
import { Account } from "./models/Account";
import { Validator } from "./models/Validators/Validator";
import { minLength, maxLength, noBlankSpaces, isNumber, minValue, validate, maxValue, hasPattern, isEmail } from "./utils/Validators";
const prompt = require("prompt-sync")();
const transact: Transaction = new Transaction(10000,new Date(),1,'expenditure',"Test transaction");
//console.log(transact)
//transact.testt();
let accountName = validate(prompt("Enter the account name: "),[isEmail()]);
const account = new Account( 100000,accountName);
console.log(account.balance,account.id,account.name)
