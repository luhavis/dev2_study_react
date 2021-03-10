var list = [0, 1];
console.log(list);

var [item1, item2, item3 = -1] = list;
console.log(item1, item2, item3);

[item2, item1] = [item1, item2];
console.log(item2);
console.log(item1);

var obj = { key1: 'one', key2: 'two' };
var newKey1 = obj.key1;
console.log(obj);

var { key1: newKey1, key2, key3 = 'default key3 value' } = obj;
console.log(key1);
console.log(key2);
console.log(key3);

var [item, ...otherItems] = [0, 1, 2];
var { key1, ...others } = { key1: 'one', key2: 'two' };
console.log(item, otherItems);
console.log(key1, others);
