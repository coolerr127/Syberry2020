"use strict";

function largestOdd(arr){
    let largest = 'No odd numbers found';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0 && !isNaN(arr[i])) {
            largest = arr[i];
            break;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0 && arr[i] > largest && !isNaN(arr[i])) {
            largest = arr[i];
        }
    }
    return largest;
}

function sequenceSum(s){
    const arr = s.split(',');
    const sum = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
    return arr.reduce(sum);
}

function vowelsNumber(s){
    s = s.toLowerCase();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == 'e' || s.charAt(i) == 'y' || s.charAt(i) == 'u' || 
            s.charAt(i) == 'i' || s.charAt(i) == 'o' || s.charAt(i) == 'a') {
            count++;
        }
    }
    return count;
}

function contains(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    return str1.includes(str2) || str2.includes(str1);
}

function isPalindrome(s){
    return s === s.replace(/\s+/g, '').toLowerCase().split('').reverse().join('');
}

function findExtremeDivisors(n1, n2){
    if (!Number.isInteger(n1) || !Number.isInteger(n2) || n1 <= 0 || n2 <= 0) {
        return('Error: n1 and n2 should be positive ints!');
    }
    let SCD,
        LCD;
    let x = n1,
        y = n2;
    while (x && y) {
        x > y ? x %= y : y %= x;
    }
    LCD = x + y;
    if (LCD == 1) {
        return('There are no common divisors');
    } else {
        for (let i = 2; i <= n1; i++) {
            if (n1 % i == 0 && n2 % i == 0) {
                SCD = i;
                break;
            }
        }
    }
    return([SCD, LCD]);

}

function intersect(L1, L2){
    return L1.filter(function (element) {
        return L2.indexOf(element) > -1;
    });
}

function indexOfMax(arr){
    let result = arr[0];
    arr.forEach(element => {
        if (element > result) {
            result = element;
        }
    });
    return arr.indexOf(result);
}

function letterHist(s){
    let curChar,
        alphabet = 'abcdefghijklmnopqrstuvwxyz',
        result = '';
    let hist = new Array(26);
    hist.fill(0, 0, 26);

    for (let i = 0; i < s.length; i++) {
        curChar = s.toLowerCase().charAt(i);
        if ('a' <= curChar && curChar <= 'z') {
            hist[curChar.charCodeAt() - 97]++;
        }
    }
    for (let i = 0; i < 26; i++) {
        result += alphabet.charAt(i) + ' = ' + hist[i] + ', ';
    }

    return result;
}

function isPalindromeRecursive(s) {
    s = s.split(' ').join('').toLowerCase();
    if (s.charAt(0) === s.charAt(s.length - 1) && s.length != 0) {
        s = s.slice(1, s.length - 1);
    } else if(s.length == 0) {
        return true;
    } else {
        return false;
    }
    return isPalindrome(s);
}

// console.log(largestOdd([2, 3, 4, 6, 7]));
// console.log(sequenceSum('1.1, 2.1, 3.9'));
// console.log(vowelsNumber('azcbobobegghakl'));
// console.log(contains('ABcd', 'bC'));
// console.log(isPalindrome('ropot'));
// console.log(findExtremeDivisors(8769, 465));
// console.log(intersect([1, 1, 2, 'a', 'c'], [1, 1, 1, 'b', 'c', 'd', 'e', 2]));
// console.log(indexOfMax([1, 2, 3, 4, 1.2, 7, 1.4342, 2.222]));
// console.log(letterHist('cabAccCCde'));
console.log(isPalindromeRecursive('ropot'));