function largestElement(numbers){
    let largest = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 23, 43, 54, 65];
const oldest = largestElement(ages);
console.log('oldest buira is', oldest);