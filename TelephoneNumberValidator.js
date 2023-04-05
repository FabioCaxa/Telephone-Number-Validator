function telephoneCheck(str) {
    //Use RegExp patterns to check if it's a US valid phone number
    //^ starts a string anchor
    //(1\s?)? starts with an optional number 1, with or without a whitespace
    //(\(\d{3}\)|\d{3}\) means three digits, surrounded or not by parenthesis, using the literal characters (\ \)
    //[\s\-]? means an optional space or hyphen -
    //\d{3} means three digits
    //[\s\-]? means another optional space or hyphen -
    //\d{4} means four digits
    //$ ends a string anchor
    const phonePatternUS = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    //returns a boolean value using the test method
    return phonePatternUS.test(str);
}

//Function calls:
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1(555)-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("123456789"));
telephoneCheck("555-555-5555");