// Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
//     Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
// let arr=[1,2,3]
// console.log(arr.reverse(arr))


// Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений,
// таких как false, undefined, пустые строки, ноль, null. *
// Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

// let array=[0, 1, false, 2, undefined, '', 3, null]
// function handleCheck(arr){
//     return arr.filter(Boolean)
// }
// console.log(handleCheck(array))




// * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
//     Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
// let arr=[1, 2, 3, 1, 2]
// function handleCheckRepetition(arr){
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(handleCheckRepetition(arr))


// Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// let arr=  ['a', 'b', 'c']
// let arr1=[1, 2, 3]
// let rezult=arr.concat(arr1)
// console.log(rezult)

//     Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr1=[1, 2, 3]
// arr1.push(4,5,6)
// console.log(arr1)


// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr1=[1, 2, 3]
// arr1.unshift(4,5,6)
// console.log(arr1)


// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let  arr= [1,2,3,4,5]
// arr.splice(1,2)
// arr.splice(3,4)
// console.log(arr)

// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// const obj={js:'test', jq: 'hello', css: 'world'}
// let arr=Object.keys(obj)
// console.log(arr)



//  Напишите код, который преобразовывает и объединяет все элементы массива в
//  одно строковое значение. Элементы массива будут разделены запятой.
//  ['Капуста', 'Репа', 'Редиска', 'Морковка']
// let arr=['Капуста', 'Репа', 'Редиска', 'Морковка']
// let arr1=arr.join(',')
// console.log(arr1)



// Пользователь вводит строку кириллицей разного регистра.
// Напишите функцию, которая принимает строку в качестве аргумента и
// заменяет регистр каждого символа на противоположный. Например,
// если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]

let str='КаЖдЫй ОхОтНиК'
function handleRegistr(str) {
    let chars = str.split('');
    let arr = chars.map(char => {
        if (char === char.toLowerCase()) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    });
    return arr
}
console.log(handleRegistr(str));





// const cars = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2018,
//         color: "white",
//         price: 45000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 60000
//     }
// ]
// // 1 фильтровать по цене. от 40000 до 60000 и год до 2019
// // 2 марка
// const arr1 = cars.filter(car => car.price >= 40000 && car.price <= 60000 && car.year < 2019);
// const  arr2=cars.filter(car=>car.make==='Tesla')
// console.log(arr1)
// console.log('Сортировка по марке',arr2)
