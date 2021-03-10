var x = 0;
var y = 0;
var obj = { x: x, y: y };
var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';
var obj2 = {
  x: x,
  methodA: function () {
    console.log('method A');
  },
  methodB: function () {
    return 0;
  },
};

var obj3 = { x, y };
var combined2 = {
  ['one' + randomKeyString]: 'some value',
};
var obj4 = {
  x,
  methodA() {
    console.log('method A');
  },
  methodB() {
    return 0;
  },
};

console.log(obj);
console.log(obj3);

console.log(obj2);
console.log(obj4);
