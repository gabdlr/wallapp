import {Common} from './Common';
export class Transaction extends Common{
	private _amount: number = 0;
	getAmount(){
		let amount: number;
		amount = Number(this.getInput('Insert transaction amount: '));
		if(isNaN(amount)||amount <= 0){
			console.log('You must enter a valid number')}else{this._amount = amount}
	}

	testFn(){
	return this.httpCall({
		hostname:'jsonplaceholder.typicode.com',
		path:'/posts',
		method:'GET'
	})
	}
}

