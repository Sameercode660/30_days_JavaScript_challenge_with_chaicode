// Questoin: Write an arrow function to check it a string contains a specific character and return a boolean

const checkStr = (str, char) => {
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] == char) {
            return true;
        }
    }
    return false
}

const result = checkStr('Sameer', 'x')

console.log(result)