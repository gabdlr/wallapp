import * as http from 'http';
const prompt = require('prompt-sync')();

export class Common{
	protected getInput(messagge:string):string{
	return prompt(messagge);
	}

	protected httpCall(
		options:{hostname:string,
			path:string,
			method:string}){
	return new Promise((resolve,reject)=>{
	http.request(options, (res) => {
	let data:string = '';
	res.on('data', (chunk) => {
		data += chunk;
	});
	res.on('end', () => {
		resolve(JSON.parse(data))
	});
	}).on('error', (err) => {console.log('An error has occurred')}).end();	
		});
	}
}
