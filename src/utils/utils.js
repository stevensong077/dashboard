const deepCopy = obj => {
  return JSON.parse(JSON.stringify(obj));
};

const find = (str1, str2) => {
  return str1.toLowerCase().indexOf(str2.toLowerCase()) > -1;
  //if str1 inclues str2, return true
};

// const getNewData=(prevDataArr, key, row)=> {
//   const newArr = prevDataArr.forEach(item => {
//     if (item.key === key) {
//       return { ...item, ...row };
//     }
//   });
//   return newArr;
// }

export { deepCopy, find };
