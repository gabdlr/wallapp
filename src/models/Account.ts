import { Transaction } from "./Transaction";
import { Common } from "./Common";

export class Account {

    private _id: string = Common.generateId();
    private _transactions: Transaction[] = [];
    constructor(private _balance: number, 
                private _name: string){
        this.name = _name;
        this.balance = _balance;
    }
    
    get id(){
        return this._id;
    }

    get balance(){
        return this._balance;
    }

    set balance(amount: number){
        if(isNaN(amount) || amount <= 0) {
            console.log("You must enter a valid number");
            return;
        } 
        this._balance = amount;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if(!value){
            value = 'New Account'
        }
        this._name = value;   
    }

}