const arrSum = (arr) => {
  let newArr = arr.flat();
  return newArr.reduce((acc, val) => acc + val);
};

let arr = [2, 3, 4, 5, [4, 1, 2]];

console.log(arrSum(arr));
