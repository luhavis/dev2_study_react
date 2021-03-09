var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2]; // 전개 연산자
const [first, second, three = 'empty', ...others] = array1;
function func(...args) {
  var [first, ...others] = args;
  console.log(first);
  console.log(others);
}

console.log(combined);

console.log(first);
console.log(second);
console.log(three);
console.log(others);

func('a', 'b', 'c', 'd', 'e', 'f', 'g');
