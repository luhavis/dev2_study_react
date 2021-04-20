const getRandomNumber = (min, max) => {
  const range = max - min + 1;
  return parseInt(Math.random() * range + min, 10);
};

const createData = (index) => {
  switch (getRandomNumber(0, 2)) {
    case 1: {
      return {
        id: `DOIT${index}`,
        code: "DOIT",
        name: "두잇코인",
        totalPrice: getRandomNumber(10000000, 80000000),
        currentPrice: getRandomNumber(20000, 2500000),
        amount: getRandomNumber(1, 150),
        dateTime: "2019/01/20 02:32:21",
      };
    }
    case 2: {
      return {
        id: `ETH${index}`,
        code: "ETH",
        name: "이더리움",
        totalPrice: getRandomNumber(10000000, 70000000),
        currentPrice: getRandomNumber(200000, 2500000),
        amount: getRandomNumber(1, 345),
        dateTime: "2019/01/12 02:32:21",
      };
    }
    case 3: {
      return {
        id: `BTX${index}`,
        code: "BTX",
        name: "비트코인",
        totalPrice: getRandomNumber(10000000, 100000000),
        currentPrice: getRandomNumber(200000, 2500000),
        amount: getRandomNumber(1, 700),
        dateTime: "2019/01/12 04:21:11",
      };
    }
  }
};

module.exports = function() {
  return {
    transaction: Array(100)
      .fill("")
      .map((_, index) => createData(index)),
  };
};
