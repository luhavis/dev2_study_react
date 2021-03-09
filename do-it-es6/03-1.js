var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};

var combined = Object.assign({}, objectOne, objectTwo); // 두 객체를 합침. 중복되는 키가 있으면 objectOne에 objectTwo를 덮어씌움.
console.log(combined);
var combined = Object.assign({}, objectTwo, objectOne); // 두 객체를 합침. 중복되는 키가 있으면 objectTwo에 objectOne을 덮어씌움.
console.log(combined);

var others = Object.assign({}, combined);
delete others.other;
console.log(others);
