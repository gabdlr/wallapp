import { Common } from "./Common";
export class Transaction extends Common {

  constructor(private _amount: number,
              private _date: Date,
              private _accountId: number,
              private _type: TransactionType,
              private _description?: string){
    super()
  }

  public get amount(): number {
    return this._amount;
  }
  public set amount(value: number) {
    this._amount = value;
  }
  
  public get date(): Date {
    return this._date;
  }
  public set date(value: Date) {
    this._date = value;
  }
  
  public get accountId(): number {
    return this._accountId;
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  
  public get type(): TransactionType {
    return this._type;
  }
  public set type(value: TransactionType) {
    this._type = value;
  }
  
  public get description(): string {
    return this._description ? this._description : '';
  }
  public set description(value: string) {
    this._description = value;
  }

  getAmount(): number {
    let amount: number;
    amount = Number(this.getInput("Insert transaction amount: "));
    return amount;
  }

  async testt(){
    try{
      console.log('loading...');
      const response = await this.httpCall({
        hostname: "api.apilayer.com",
        path:"/exchangerates_data/convert?to=ars&from=usd&amount=1",
        method: 'GET',
        headers: {
          "apikey":"Ru6fKlFJsjK80IZHsyEZisOy6SCuiQQ5",
        }
      });
      console.log(JSON.parse(response));
    }catch(error){
      console.log(error);
    } 
  }
  

}
