// Task 1
function checkVotingEligibility(age) {
  if (age >= 18){
    console.log("You are eligible for Voting");
  } else {
    console.log("You are not eligible for Voting");
  }
}

// Task 2
function printNumbersWithWhile() {
  var num = 1;
  while (num <= 5){
      console.log(num);
      num++;
  }
}

// Task 3
function printEvenNumbersWithFor() {
  for (let i = 2; i <= 10; i+=2){
    console.log(i);
  }
}

// Task 4
function getDayOfWeek(weekDay) {
  switch (weekDay) {
      case 1:
      console.log("sunday")
      break;
      case 2:
      console.log('monday')
      break;
      case 3:
      console.log('tuesday')
      break;
      case 4:
      console.log('wedensday')
      break;
      case 5:
      console.log('thursday')
      break;
      case 6:
      console.log('friday')
      break;
      case 7:
      console.log('saturday')
      break;
      default:
      console.log ("Weekday should be between 1 and 7")
  } 
}

// Task 5
function sum(num1, num2) {
  console.log(num1, '+', num2, '=', num1 + num2);
}

// Task 6
//Uncomment and solve
const fruits = ['Orange', 'Apple', 'Banana', 'Pineapple', 'Grapes'];
console.log(fruits);

module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
