export class FinancialEntity{

    constructor(private _id: string,
                private _name: string, 
                private _type: TransactionType){
        
    }

    get type(): TransactionType {
        return this._type;
    }
    set type(value: TransactionType) {
        this._type = value;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get id(): string {
        return this._id;
    }
    set id(value: string) {
        this._id = value;
    }

}