const arr2 = [];
arr2.push(1);
arr2.splice(0, 0, 0);
console.log(arr2);
arr2.pop();

console.log(arr2);

const obj2 = {};
obj2['name'] = '내이름';
Object.assign(obj2, { name: '새이름' });
delete obj2.name;
console.log(obj2);
