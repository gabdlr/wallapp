import { Validator } from "../models/Validators/Validator";
export const validate = (value: string,validators: Validator[]): string => {
    let errors: Set<string> = new Set();
    let errored: boolean = false;
    validators.forEach( (validator:Validator) => {
        if(!validator.validationFn(value)){
            errored = true;
            errors.add(validator.errorMessage);
        }
    });
    if(errored){
        errors.forEach( (error: string) => console.error(error))
        return '';
    }
    return value;
}

export const minLength = (minLength: number, errorMessage?: string) => {
    const minLengthFn = (value: string) => {
        value = value.trim();
        let isValid: boolean = true;
        if(value.length < minLength){
            isValid = false;
        }
        return isValid;
    }
    return new Validator(errorMessage ?? `The input is too short\nThe min. length is ${minLength} characters`,minLengthFn) ;
}

export const maxLength = (maxLength: number, errorMessage?: string) => {
    const maxLengthFn = (value: string) => {
        value = value.trim();
        let isValid: boolean = true;
        if(value.length > maxLength){
            isValid = false;
        }
        return isValid;
    }
    return new Validator(errorMessage ?? `The input is too long\nThe max. length is ${maxLength} characters`, maxLengthFn);
}

export const noBlankSpaces = (errorMessage?: string) => {
    const noBlankSpacesFn =  (value: string) => {
        value = value.trim();
        let isValid: boolean = true;
        if(new RegExp(' ').test(value)){
            isValid = false;
        }
        return isValid;
    }
    return new Validator(errorMessage ?? `This input doesn't allow blank spaces`, noBlankSpacesFn);
}

export const minValue = (minValue: number, errorMessage?: string) => {
    const minValueFn = (value: string) => {
        value = value.trim();
        let isValid: boolean = true;
        if(!isNumber().validationFn(value)){
            validator.errorMessage = isNumber().errorMessage;
	isValid = false;
        }else if(Number(value) < minValue){
            isValid = false;
        }
        return isValid;
    }
    const validator = new Validator(errorMessage ?? `The number input is too small\nThe min. value allowed is ${minValue}`, minValueFn);
    return validator;
}

export const maxValue = (maxValue: number, errorMessage?: string) => {
    const maxValueFn = (value: string) => {
        value = value.trim();
        let isValid: boolean = true;
        if(!isNumber().validationFn(value)){
            validator.errorMessage = isNumber().errorMessage;
	isValid = false;
        }else if(Number(value) > maxValue){
            isValid = false;
        }
        return isValid;
    }
    const validator = new Validator(errorMessage ?? `The number input is too big\nThe max. value allowed is ${maxValue}`, maxValueFn)
    return validator;
}

export const isNumber = (errorMessage?: string)=> {
    const isNumberFn = (value: string) => {
        value = value.trim();
        let isValid: boolean = true;
        if(isNaN(Number(value))){
            isValid = false;
        }
        return isValid;
    }
    return new Validator(errorMessage ?? 'The input value must be a numeric value',isNumberFn);
}

export const hasPattern = (pattern: string|RegExp, errorMessage?: string) => {
    const hasPatternFn = (value:string) => {
        return new RegExp(pattern).test(value);
    }
    return new Validator(errorMessage ?? 'The given input doesn\'t match the expected format',  hasPatternFn)
}

export const isEmail = (errorMessage?: string) => {
    const isEmailFn = (value:string) => {
        return new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(value);
    }
    return new Validator(errorMessage ?? 'Invalid email address', isEmailFn);
}
