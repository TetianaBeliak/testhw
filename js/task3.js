// всі парни числа від мін до макс
function calculateEvenNumber(min, max) {
    let sum = 0;
    for (let i = min; i < max; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(calculateEvenNumber(1, 6))