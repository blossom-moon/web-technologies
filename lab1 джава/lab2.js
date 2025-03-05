<!DOCTYPE html>
<html lang="uk">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Лабораторна робота: Оператори порівняння, логічні оператори та умовні розгалуження</title>
</head>
<body>
<script>
    // 1. Оператори порівняння

    // Завдання 1.1: Максимальний та мінімальний елементи у масиві
    function findMinMax(arr) {
    return { min: Math.min(...arr), max: Math.max(...arr) };
}

    const numbers = [3, 5, 1, 8, 10, -2];
    console.log("Мінімальний та максимальний елементи:", findMinMax(numbers));

    // Завдання 1.2: Порівняння двох об'єктів
    function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
    return false;
}

    for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
    return false;
}
}

    return true;
}

    const objA = { name: "Alice", age: 25 };
    const objB = { name: "Alice", age: 25 };
    console.log("Чи об'єкти однакові?", compareObjects(objA, objB));

    // 2. Логічні оператори

    // Завдання 2.1: Перевірка числа в діапазоні
    function isInRange(number, min, max) {
    return number >= min && number <= max;
}

    console.log("Чи число 5 в діапазоні від 1 до 10?", isInRange(5, 1, 10));

    // Завдання 2.2: Зміна стану змінної за допомогою NOT
    let isActive = true;
    isActive = !isActive; // Змінюємо стан
    console.log("Новий стан змінної isActive:", isActive);

    // 3. Умовні розгалуження

    // Завдання 3.1: Оцінка студента в словесному форматі
    function getGradeDescription(grade) {
    if (grade >= 90) return "Відмінно";
    else if (grade >= 75) return "Добре";
    else if (grade >= 60) return "Задовільно";
    else return "Незадовільно";
}

    console.log("Оцінка 95:", getGradeDescription(95));
    console.log("Оцінка 80:", getGradeDescription(80));
    console.log("Оцінка 65:", getGradeDescription(65));
    console.log("Оцінка 50:", getGradeDescription(50));

    // Завдання 3.2: Визначення сезону за місяцем (if)
    function getSeason(month) {
    if (month >= 3 && month <= 5) return "Весна";
    else if (month >= 6 && month <= 8) return "Літо";
    else if (month >= 9 && month <= 11) return "Осінь";
    else return "Зима";
}

    console.log("Сезон для місяця 4:", getSeason(4));
    console.log("Сезон для місяця 7:", getSeason(7));
    console.log("Сезон для місяця 10:", getSeason(10));
    console.log("Сезон для місяця 12:", getSeason(12));

    // Завдання 3.3: Визначення сезону за місяцем (тернарний оператор)
    function getSeasonTernary(month) {
    return month >= 3 && month <= 5 ? "Весна" :
    month >= 6 && month <= 8 ? "Літо" :
    month >= 9 && month <= 11 ? "Осінь" : "Зима";
}

    console.log("Сезон для місяця 4 (тернарний оператор):", getSeasonTernary(4));
    console.log("Сезон для місяця 7 (тернарний оператор):", getSeasonTernary(7));
    console.log("Сезон для місяця 10 (тернарний оператор):", getSeasonTernary(10));
    console.log("Сезон для місяця 12 (тернарний оператор):", getSeasonTernary(12));
</script>
</body>
</html>