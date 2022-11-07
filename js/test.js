let arr = [
  { key: 'a' },
  { key: 'b' },
  { key: 'c' }, // 2
  { key: 'd' },
  { key: 'e' },
];
const obj = arr[2];
const index = arr.indexOf(obj);
arr.splice(index, 1);

console.log(arr); // 2
