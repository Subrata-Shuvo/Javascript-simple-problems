let numbers = [12,23,34,45,56,67,78]
function arrayTotal(numbers){
    let sum = 0;
    for(let i=0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;      
    }
    return sum;
}

const total = arrayTotal([34,32,43]);
console.log('array total', total);