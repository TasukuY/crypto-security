let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', ' ', '$', '#', '%', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function encryptString(str){
    let encryptedString = '';
    for (let index = 0; index < str.length; index++) {
        let key = (array.length-1) - array.indexOf(str[index])

        encryptedString += array[key];
    }
    return encryptedString;
}

let test = 'I love cryptography!';
let test2 = encryptString(test);

console.log(encryptString(test2));