import { Transaction } from "./Transaction";
import { Common } from "./Common";
import Validator from "./../utils/Validators"
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
        let auxName: string = Validator.stringLength(value,'name',4,255);
        if(auxName.length){
            value = auxName;
            this._name = value;
        }
    }

}