function smallestElement(numbers){
    let smallest = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > smallest){
            smallest = element;
        }
        return smallest;
    }  
}

const ages = [05 , 10, 12, 23, 43, 54, 65];
const oldest = smallestElement(ages);
console.log('Youngest kochi is', oldest,"years old");