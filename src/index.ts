import {Transaction} from './models/Transaction';

const transact: Transaction = new Transaction();
transact.getAmount();
//let res;
//transact.testFn().then( r => {
//res = r;
//console.log('reaolved!');
//console.log(res);
//});
//console.log(res);

async function lala(){
	const response = await transact.testFn().then(res => res);
	console.log('holi');
	console.log(response);
	return response;
}
