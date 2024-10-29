
module.exports.generateStringToken = (length) => {
    let char = 'abcdefghijklmnopqrstuvywzxABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = "";
    for (let i = 0; i < length; i++) {
        result += char.charAt(Math.floor(Math.random() * char.length))
    }
    return result;
}

module.exports.generateNumberOTP = (length) => {
    let char = '0123456789';
    let result = "";
    for (let i = 0; i < length; i++) {
        result += char.charAt(Math.floor(Math.random() * char.length))
    }
    return result;
}