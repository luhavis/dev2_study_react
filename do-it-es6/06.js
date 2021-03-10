function add(first, second) {
  return first + second;
}

// 익명 함수
var add = function (first, second) {
  return first + second;
};

var add = (first, second) => {
  return first + second;
};

// 결과 값을 바로 반환할 경우 중괄호를 생략할 수 있음
var add = (first, second) => first + second;

var addAndMultiple = (first, second) => ({
  add: first + second,
  multiply: first * second,
});

console.log(addAndMultiple(10, 10)); // return { add: 20, multiply: 100 }

function addNumber(num) {
  return function (value) {
    return num + value;
  };
}

var addNumber = (num) => (value) => num + value; // 위 함수를 화살표 함수로 간단하게 표현 가능

class Arrow {
  value = 10;

  constructor() {
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);

    var addThis3 = (first, second) => this.value + first + second;
  }
}

var a = new Arrow();
console.log(a);
