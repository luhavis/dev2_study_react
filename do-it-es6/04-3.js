const num1 = 1;
const num2 = num1 * 3;
const str1 = '문자';
const str2 = str1 + '추가';
const arr3 = [];
const arr4 = arr3.concat(1);

const arr5 = [...arr4, 2, 3];
const arr6 = arr5.slice(0, 1);
const [first, ...arr7] = arr5;
const obj3 = { name: '내이름', age: 20 };
const objValue = { name: '새이름', age: obj3.age };
const obj4 = { ...obj3, name: '새이름' };
const { name, ...obj5 } = obj4;

console.log(arr5);
console.log(arr6);
console.log(first, arr7);
console.log(obj3);
console.log(objValue);
console.log(obj4);
console.log(name, obj5);
