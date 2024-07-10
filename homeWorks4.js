
// строка проверить строку на наличие . и после нее на com или ru
// function handleCheckStr(arg){
//  if (arg.includes('.com')||arg.includes('.ru')){
//   return 'Присутсвует'
//  }else {
//   return 'Отсутсвует'
//  }}
// console.log(handleCheckStr('admin.com'))

// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4
// function handleCheckLength(arg){
//  if (arg.length%2===0 && arg.length<=8 && arg.length>=4){
//
//   return 'Четная. строка в диапозоне от 4 до 8'
//  }else {
//   return  false
//  }
// }
// console.log(handleCheckLength('qwerty'))

// строка поменять букву каждого четного индекса на E можно решить через map
// function changeLetterByIndex(arg) {
//  let arr = arg.split('')
//  let newArr = arr.map((char, index) => {
//      idx=index+1
//       return idx% 2 === 0 ? 'e' : char;
//      }
//  );
// let str = newArr.join('');
//  return str
// }
// console.log(changeLetterByIndex('banana'))




// строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале
// function handleCheckPassword(arg1,arg2){
//     if (arg1.trimStart()===arg2.trimStart()){
//         return 'Access'
//     }else{
//         return 'Denied'
//     }
// }
// console.log(handleCheckPassword(' qwerty','qwerty'))


// ['lorem', 'ipsum', 'dolor', 'sit'] => [5,5,5,3]
// let arr=['lorem', 'ipsum', 'dolor', 'sit']
// console.log(arr.map(el=>el.length))



// ['lorem', 'ipsum', 'dolor'] => [1,2,3]
// let arr=['lorem', 'ipsum', 'dolor']
// console.log(arr.map((el,index)=>{
// return index+1
// }))



// ['lorem', 'ipsum', 'dolor'] => ['Lorem', 'ipsum', 'Dolor']
// let arr=['lorem', 'ipsum', 'dolor']
// let arr1 = arr.map((word, index) => {
//     if (index % 2 === 0) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     } else {
//         return word;
//     }
// });
// console.log(arr1)


// ['lorem', 'ipsum', 'dolor'] => ['LOREM', 'IPSUM', 'DOLOR']
// let arr=['lorem', 'ipsum', 'dolor']
// let arr1 = arr.map(el=>el.toUpperCase() )
// console.log(arr1)


// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'
// let arr=['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let arr1=arr.join('-')
// console.log(arr1)



// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet'
// let arr=['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let arr1=arr.join('/')
// console.log(arr1)



// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet'
// let arr=['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let arr1=arr.join(' ')
// console.log(arr1)



// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit']
// let arr=['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//  let arr1=arr.filter((word,index)=>{
//              return  index%2!==0
//      })
// console.log(arr1)



// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet']
// let arr=['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//  let arr1=arr.filter((word,index)=>{
//              return  index%2===0
//      })
// console.log(arr1)




// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
// let arr=['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// arr.push('consectetur', 'adipiscing', 'elit')
// console.log(arr)


// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]
// let arr=[123,33,444,'22',55,66,77,88,99]
// let arr1=arr.filter(el=>{
//     return typeof el==="number"
// })
// console.log(arr1)



// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99,22]
// let arr=[123,33,444,'22',55,66,77,88,99]
// let arr1=arr.filter(el=>{return typeof el==="number"})
// let arr2=arr.filter(el=>{return typeof el!=="number"})
// let rezult=arr1.concat(arr2.map(el=>parseInt(el)))
// console.log(rezult)




// ['null', undefined, 0, false, true, ''] => [0, false, true]
// let arr = ['null', undefined, 0, false, true, ''];
// let rezult=arr.filter(item => item !== 'null' && item !== undefined && item !== '');
// console.log(rezult)


// ['null', undefined, 0, false, true, ''] => [true, 'null']
// let arr = ['null', undefined, 0, false, true, ''];
// let rezult=arr.filter(item => item === true || item === 'null');
// console.log(rezult)


// [1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']
// let arr=[1123, 'qwe']
// let rezult=arr.concat(arr)
// console.log(rezult)


// [null, undefined] => [null, undefined, null, undefined]
// let arr=[null, undefined]
// let rezult=arr.concat(arr)
// console.log(rezult)


// 'lorem ipsum dolor sit amet' => ['lorem dolor', 'amet'] => 'lorem dolor amet'
// let str='lorem ipsum dolor sit amet'
// let arr=str.split(' ')
// let rezult = arr.filter((word, index) => index % 2 === 0).join(' ');
// console.log(rezult)


// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr=[1, 2, 3]
// let arr1=[4, 5, 6]
// console.log(arr.concat(arr1))



//     Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// let arr=[1, 2, 3]
// console.log(arr.reverse())

//     Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr=[1, 2, 3]
// arr.push(4,5,6)
// console.log(arr)


// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr=[1, 2, 3]
// arr.unshift(4,5,6)
// console.log(arr)


// Дан массив ['js', 'css', 'jq']. Выведите в консоли  первый элемент.
// let arr=['js', 'css', 'jq']
// console.log(arr[0])


//     Дан массив ['js', 'css', 'jq']. Выведите а консоли последний элемент.
// let arr=['js', 'css', 'jq']
// console.log(arr[2])


//     Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let arr = [1, 2, 3, 4, 5];
// let arr1=arr.slice(0, 3)
// console.log(arr1 );


//     Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arr = [1, 2, 3, 4, 5];
// let arr1=arr.slice(3)
// console.log(arr1 );


//     Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5]
// let arr1=arr.slice(0,1)
// let arr2 =arr.slice(3)
// console.log(arr1.concat(arr2) )


//     Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let arr = [1, 2, 3, 4, 5];
// let arr1=arr.slice(1,4)
// console.log(arr1 );

//     Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// let arr1=arr.slice(0,3)
// arr1.push('a','b','c')
// let arr2 =arr.slice(3)
// console.log(arr1.concat(arr2) );

//     Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// let arr1=arr.slice(0,1)
// arr1.push('a','b',)
// let arr2 =arr1.concat(arr.slice(1,4))
// arr2.push('c')
// let arr3 =arr2.concat(arr.slice(4))
// arr3.push('e')
// console.log(arr3 );


//     Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// let arr=[]
// for (let i = 0; i < 6; i++) {
//     arr[i] = 'x'.repeat(i + 1);
// }
// console.log(arr)
//     Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
// let arr=[]
// for (let i = 1; i < 6; i++) {
//     arr.push(i.toString().repeat(i));
// }
// console.log(arr)

//     Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
//     Первым параметром функция принимает значение, которым заполнять массив,
//     а вторым - сколько элементов должно быть в массиве.
//     Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']
// function arrayFill( str,num){
//     let arr=[]
//     for (let i = 0; i < num; i++) {
//         arr.push(str)
//     }
//     return arr
// }
// console.log(arrayFill('x',5))

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
// чтобы в сумме получилось больше 10-ти.

// let arr = [5, 3, 4, 5, 6, 4];
// let sum = 0;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     count++;
//     if (sum > 10) {
//         break;
//     }
// }
// console.log(`Нужно сложить ${count} элементов, чтобы сумма превысила 10. Сумма ${sum}`);




//     Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// let arr = [1, 2, 3, 4, 5]; // Пример массива
// let reverse = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
// }
// console.log(reverse);


//     Дан массив с числами. Найти самое большое число в этом массиве и вывести в консоли.
//  let arr = [54, 32, 41, 59, 60, 46];
// maxNum=arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]> maxNum) {
//      maxNum=arr[i]
//     }
// }
// console.log(maxNum);


// Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй,
// а третий элемент на четвертый. Результаты сложите, присвойте переменной result.
// Выведите на экран значение этой переменной.
// let arr=[2,5,3,9]
// let result = (arr[0] * arr[1]) + (arr[2] * arr[3]);
// console.log(result)



//     Дан массив из имен например ['john', 'jane', 'kate', 'peter'].
//     Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.
let arr=['john', 'jane', 'kate', 'peter']
let arr1 = arr.map(word=>word.charAt(0).toUpperCase() + word.slice(1))
console.log(arr1)