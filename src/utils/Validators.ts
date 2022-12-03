export default {
    stringLength:(  value:string,
                    valueName: string,
                    minLength:number,
                    maxLength:number) => {
        let error: boolean = false;
        if(value.length < minLength){
            console.error(`The ${valueName} is too short\nThe min. length is ${minLength} characters`);
            error = true;
        }
        else if(value.length > maxLength){
            console.error(`The ${valueName} is too long\nThe max. length is ${maxLength} characters`);
            error = true;
        }
        value = value.trim();
        return error ? '' : value;
    }
}