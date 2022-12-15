import { hasPattern, isEmail, isNumber, maxLength, maxValue, minLength, minValue, noBlankSpaces, validate } from "./Validators";
import { generateRandomSentence, generateRandomString, randomNonNumericalCharacter } from "./../tools/testing-functions";

describe("Validates input can be coerced to number", function () {
  
  it("Should return false for non coercible value into number", function () {
    let result: boolean = isNumber("test").validationFn(randomNonNumericalCharacter());
    expect(result).toBe(false);
  });

  it("Should return true for coercible value into number", function () {
    let result: boolean = isNumber("test").validationFn(Math.ceil(Math.random()*10).toString());
    expect(result).toBe(true);
  });

});

describe("Validates input length is at least equal to a given length", function () {
  
  it("Should return false for inputs shorter than the min length param", function () {
    let result: boolean = minLength(6,"test").validationFn(generateRandomString(Math.ceil(Math.random()*5)));
    expect(result).toBe(false);
  });

  it("Should return true for inputs larger or equal to the min length param", function () {
    let result: boolean = minLength(6,"test")
    .validationFn(generateRandomString(Math.ceil(Math.pow(Math.random()*10,Math.random()*2))+6));
    expect(result).toBe(true);
  });

});

describe("Validates input length is at most equal to a given length", function() {

  it("Should return false for inputs longer than the max length param", function () {
    let result: boolean = maxLength(6,"test").validationFn(generateRandomString(Math.ceil(Math.pow(Math.random()*10,Math.random()*2))+6));
    expect(result).toBe(false);
  });

  it("Should return true for inputs shorter or equal to the max length param", function () {
    let result: boolean = maxLength(6,"test").validationFn(generateRandomString(Math.ceil(Math.random()*6)));
    expect(result).toBe(true);
  });

});

describe("Validates input blank spaces", function() {

  it("Should return false for an input that contains blank spaces (leading/trailing spaces are removed)", function(){
    let result: boolean = noBlankSpaces("test").validationFn(generateRandomSentence(Math.round(Math.random()*10)+2));
    expect(result).toBe(false);
  });

  it("Should return true for an input that has no blank spaces (leading/trailing spaces are removed)", function(){
    let result: boolean = noBlankSpaces("test").validationFn(generateRandomSentence(Math.round(Math.random()*10)+2,false));
    expect(result).toBe(true);
  });

});

describe("Validates input is a number bigger than a given paramater", function(){

  it("Should return false for a numeric input shorter than the min value param", function() {
    let result: boolean = minValue(4).validationFn(Math.floor(Math.random()*3).toString());
    expect(result).toBe(false);
  });

  it("Should return true for a numeric input bigger than the min value param", function() {
    let result: boolean = minValue(4).validationFn((Math.ceil(Math.pow(Math.random()*10,Math.random()*2))+4).toString());
    expect(result).toBe(true);
  });

});

describe("Validates input is a number smaller than a given paramater", function(){

  it("Should return false for a numeric input larger than the max value param", function() {
    let result: boolean = maxValue(6).validationFn((Math.ceil(Math.pow(Math.random()*10,Math.random()*2))+6).toString());
    expect(result).toBe(false);
  });

  it("Should return true for a numeric input smaller or equal to the max value param", function() {
    let result: boolean = maxValue(6).validationFn(Math.round(Math.random()*6).toString());
    expect(result).toBe(true);
  });

});

describe("Validates input meets a specific pattern", function () {

  it("Should return false for a numeric input with [A-Za-z] pattern", function() {
    let result: boolean = hasPattern('[A-Za-z]',"test").validationFn(Math.round(Math.pow(Math.random()*10,Math.random()*2)).toString());
    expect(result).toBe(false);
  });

  it("Should return true for alphabetical input with [A-Za-z] pattern", function() {
    let result: boolean = hasPattern('[A-Za-z]',"test").validationFn(generateRandomSentence(1,false,true));
    expect(result).toBe(true);
  });

  it("Should return false for alphabetical input with [0-9] pattern", function() {
    let result: boolean = hasPattern('[0-9]',"test").validationFn(generateRandomSentence(1,false,true));
    expect(result).toBe(false);
  });

  it("Should return true for a numeric input with [0-9] pattern", function() {
    let result: boolean = hasPattern('[0-9]',"test").validationFn(Math.round(Math.pow(Math.random()*10,Math.random()*2)).toString());
    expect(result).toBe(true);
  });

  it("Should return true for compliant email address", function() {
    let result: boolean = isEmail("test").validationFn("gab.delosrios@gmail.com");
    expect(result).toBe(true);
  });

});

describe("Executes validators and returns evaluated input if compliant, empty string otherwise", function() {
  
  it("Should return the given input as it meets validation requirements", function() {
    let expectedResult = Math.round(Math.pow(Math.random()*10,Math.random()*2)).toString();
    let result: string = validate(expectedResult,[isNumber()]);
    expect(result).toBe(expectedResult);
  });

  it("Should return the given input as it meets validation requirements", function() {
    let expectedResult = (Math.round(Math.pow(Math.random()*10,Math.random()*2))+5).toString();
    let result: string = validate(expectedResult,[isNumber(),minValue(5)]);
    expect(result).toBe(expectedResult);
  });

  it("Should return an empty string as input doesn't meet validation requirements", function() {
    let result: string = validate(randomNonNumericalCharacter(),[isNumber()]);
    expect(result).toBe('');
  });

  it("Should return an empty string as input doesn't meet all validation requirements", function() {
    let result: string = validate((Math.round(Math.random()*4)).toString(),[isNumber(),minValue(5)]);
    expect(result).toBe('');
  });

});
