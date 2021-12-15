

const myNumbers = [1,2,3,4,5,6,7,8];


const multipyByTwo = function(numbers){
    const result = numbers.map((number) => {
        return number * 2;
    });

    return result
}

console.log(multipyByTwo(myNumbers));


const getEvens = function(numbers){
    const result = numbers.filter((number) => {
        return number % 2 === 0;
    });
    return result
}

console.log(getEvens(myNumbers));

const sumElements = function(numbers){
    const result = numbers.reduce((sum, num) => {
        return sum + num;
    });
    return result;
}

console.log(sumElements(myNumbers));