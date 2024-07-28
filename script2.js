// Function declaration - декларирование функции (объявление)
// заголовок функции                            // тело функции
function myBestJavaScriptFunction(name, age, salary, isStudent) {
    console.log(name + ' ' + age + ' ' + salary + ' ' + isStudent);  // склеивание строк & массивов конкатинация
    console.log(`
                 Information about ${name} 
                 his age = ${age} 
                 and his salary = ${salary}
                 and his state = ${isStudent}
                `
    );
}
myBestJavaScriptFunction('Admin', 24, 100500, true);
myBestJavaScriptFunction('Cpt. Jack Sparrow', 30, 500, false);
myBestJavaScriptFunction('John Dow', 42, 1500, false);
// HW
// Насать функцию sum(a,b) которая будет выводить в консоль надпись
// `Сумма числа {а} + {b} = {result}`
//Насать функцию diff(a,b)
//  `Разница чисел a - b = `
// Насать функцию multi(a,b)
//  `Произведение чисел a * b = `
// Насать функцию div(a,b)
// `Деление чисел a / b = `
// ** Насать функцию pow(a,b)
// `число а встепени b =  `