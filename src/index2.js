const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

let bracketsConfig = config2;
let str = '[[(([()]))[[]][]]]';

function check(str, bracketsConfig) {
    let confArr = [];
    bracketsConfig.forEach(element => confArr.push(element.join('')));
    console.log('confarr=', confArr);

    let cnt = 0;
    let result = 'continue iterations';

    function deleteBrackets() {
        console.log('start deleteBrFunc');
        for (i=0; i<confArr.length; i++) {
            while(str.includes(confArr[i]) === true){
                str = str.replace(confArr[i], '');
                console.log('while ', i, 'str =', str);
                console.log('incl=', str.includes(confArr[i]));
                cnt++, console.log('cnt=', cnt);
            }
        }
    }

    function checkPairs() {
        console.log('start checkPairsFunc')
        if (str.includes('()') === true || str.includes('[]') === true || str.includes('{}') === true || str.includes('||') === true || str.includes('12') === true || str.includes('34') === true || str.includes('56') === true || str.includes('77') === true || str.includes('88') === true) {
            deleteBrackets(str);
            result = 'continue iterations';
        } else if (str.length > 0) {
            result = 'false';
            console.log('false')
        } else {
            result = 'true';
            console.log('true')
        }
    }

    while (result === 'continue iterations') {
        checkPairs(str);
    }

    console.log('res=', result);
    return result;
}

check(str, bracketsConfig);
