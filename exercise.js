/** 
 EX-1:
 Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.

EX-2:
Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result.

EX-3:
Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers.
*/

// Solutions==>

// Ex-1

function convertToMinute(hour) {
  const minute = hour * 60;
  return minute;
}

const minuteConverter = convertToMinute(4);
// console.log(minuteConverter);

// Ex-2

// for loop
const array = [2012, 2016, 2023, 2024, 2025, 2028, 2030];

function findLeapYear(arr) {
  const newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 4 == 0 && arr[i] % 100 !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const leapYear2 = findLeapYear(array);

console.log(leapYear2);

// forEach loop
const leapYearArray = [2012, 2016, 2023, 2024, 2025, 2028, 2030];

function findLeapYear(arr) {
  const newArr = [];
  arr.forEach((el) => {
    if (el % 4 == 0 && el % 100 !== 0) {
      newArr.push(el);
    }
  });
  return newArr;
}

const leapYear = findLeapYear(leapYearArray);

console.log(leapYear);

// Ex-3

// for loop
const numberArray = [5, 7, 8, 10, 45, 30];

function findOddSum(arr) {
  const arr2 = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr2.push(arr[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }

  return sum;
}

const oddSumResult = findOddSum(numberArray);

console.log(oddSumResult);

// forEach loop
const numberArray2 = [5, 7, 8, 10, 45, 30];

function findOddSum(arr) {
  const arr2 = [];
  let sum = 0;
  arr.forEach((el) => {
    if (el % 2 !== 0) {
      arr2.push(el);
    }
  });
  arr2.forEach((item) => {
    sum += item;
  });
  return sum;
}

const oddSumResult2 = findOddSum(numberArray2);

console.log(oddSumResult2);
