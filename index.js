const capitalizeFirtChar = val => {
    let text = '';
    for(let i = 0 ; i < val.length; i++){
        if(i == 0){
            text += val[i].toUpperCase();
            continue;
        }

        text += val[i];
    }
    return text;
}

const reverseString = val=>{
    return val.split('').reverse().join('');
}

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const divide = (a,b) => a / b;
const multiply = (a,b) => a * b;

const caesarCipher = (text,skip) => {
    let smallArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let capitalArr = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('') ;
    let output = '';

    for (let i = 0; i < text.length; i++) {
        let item = text[i];
        if(smallArr.includes(item)){
            let index = findIndex(smallArr.indexOf(item),skip);
            output+= smallArr[index];
        }
        else if (capitalArr.includes(item)){
                let index = findIndex(capitalArr.indexOf(item),skip);
                output+= capitalArr[index];
            
        }
        else{
            output+= item;
        }
        
    }
    return output;

}

function findIndex(currentIndex, skip){
 let futureIndex = currentIndex + skip;
    if(futureIndex > 25){
        // -1 is adjusting array that starts with 0
        return futureIndex - 25 -1;
    }
    return futureIndex;
}

module.exports = {capitalizeFirtChar, reverseString, add, subtract, divide, multiply, caesarCipher};