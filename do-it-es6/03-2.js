var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  ...objectOne,
  ...objectTwo,
};
// Object.assign({}, objectOne, objectTwo); 와 동일

console.log(combined);

var combined = {
  ...objectTwo,
  ...objectOne,
};
// Object.assign({}, objectTwo, objectOne); 와 동일

console.log(combined);

var { other, ...others } = combined; // other 를 키로 사용하고 다른 값들은 others 변수에 저장
console.log(other, others);

var { ...others } = combined;
console.log(others);
