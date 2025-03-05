// Завдання 1: сума перших 10 чисел Фібоначчі
function fibonacciSum() {
    let a = 0, b = 1, sum = 0, count = 0;
    while (count < 10) {
        sum += a;
        let temp = a + b;
        a = b;
        b = temp;
        count++;
    }
    console.log("Завдання 1: ", sum);
}

// Завдання 2: сума всіх простих чисел від 1 до 1000
function sumPrimes() {
    let sum = 0;
    for (let i = 2; i <= 1000; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) sum += i;
    }
    console.log("Завдання 2: ", sum);
}

// Завдання 3: switch для визначення дня тижня
function getDayOfWeek(num) {
    switch (num) {
        case 1: console.log("Завдання 3: Понеділок"); break;
        case 2: console.log("Завдання 3: Вівторок"); break;
        case 3: console.log("Завдання 3: Середа"); break;
        case 4: console.log("Завдання 3: Четвер"); break;
        case 5: console.log("Завдання 3: П'ятниця"); break;
        case 6: console.log("Завдання 3: Субота"); break;
        case 7: console.log("Завдання 3: Неділя"); break;
        default: console.log("Завдання 3: Невірне число");
    }
}

// Завдання 4: фільтрація рядків з непарною довжиною
function filterOddLengthStrings(arr) {
    return arr.filter(str => str.length % 2 !== 0);
}

// Завдання 5: стрілкова функція для збільшення чисел на 1
const incrementArray = arr => arr.map(num => num + 1);

// Завдання 6: функція для перевірки суми або різниці на рівність 10
function checkSumOrDiff(a, b) {
    return (a + b === 10 || Math.abs(a - b) === 10);
}

// Виклик функцій
fibonacciSum();
sumPrimes();
getDayOfWeek(3);
console.log("Завдання 4: ", filterOddLengthStrings(["apple", "banana", "kiwi", "grape"]))
console.log("Завдання 5: ", incrementArray([1, 2, 3, 4, 5]));
console.log("Завдання 6: ", checkSumOrDiff(7, 3));
