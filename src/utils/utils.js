const deepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const find = (str1, str2) => {
  return str1.toLowerCase().indexOf(str2.toLowerCase()) > -1;
};
export { deepCopy, find };
