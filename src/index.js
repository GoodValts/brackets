module.exports = function check(str, bracketsConfig) {
  let confArr = [];
  bracketsConfig.forEach(element => confArr.push(element.join('')));

  let result = 'continue iterations';

  function deleteBrackets() {
      for (i=0; i<confArr.length; i++) {
          while(str.includes(confArr[i]) === true){
              str = str.replace(confArr[i], '');
          }
      }
  }

  function checkPairs() {
      if (str.includes('()') === true || str.includes('[]') === true || str.includes('{}') === true || str.includes('||') === true || str.includes('12') === true || str.includes('34') === true || str.includes('56') === true || str.includes('77') === true || str.includes('88') === true) {
          deleteBrackets(str);
          result = 'continue iterations';
      } else if (str.length > 0) {
          result = false;
      } else {
          result = true;
      }
  }

  while (result === 'continue iterations') {
      checkPairs(str);
  }

  return result;
}
