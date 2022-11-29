import {Transaction} from './models/Transaction';

const transact: Transaction = new Transaction();
transact.getAmount();
let res;
transact.testFn().then( r => {
res = r;
console.log('resolved!');
console.log(res);
});
console.log(res);

