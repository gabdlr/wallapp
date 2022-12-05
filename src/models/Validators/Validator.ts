export class Validator {

    constructor(private _errorMessage: string,
                private _validationFn: (value: string) => boolean){}

    public get errorMessage(): string {
        return this._errorMessage;
    }
    public set errorMessage(value: string) {
        this._errorMessage = value;
    }

    public get validationFn(): (value: string) => boolean {
        return this._validationFn;
    }
    public set validationFn(value: (value: string) => boolean) {
        this._validationFn = value;
    }
}