// Task # 1


function sumSliceArray(arr, first, second) {
  if (first < 0 || first >= arr.length || second < 0 || second >= arr.length) {
    throw new Error("Entered values outside the range!");
  }
  if (isNaN(arr[first]) || isNaN(arr[second])) {
    throw new Error("Entered value is not a number!");
  }

  let sum = arr[first] + arr[second];
  return sum;
}

try {
  let simpleArr = [1, 3, 5, 6, 7, 8, 9];
  console.log("Array:", simpleArr);
  const first = +prompt("Enter finst value");
  const second = +prompt("Enter second value");
  console.log(sumSliceArray(simpleArr, first, second));
} catch (error) {
  console.warn("Error:", error.message);
}


//  Task # 2



function checkAge() {
  const userName = prompt("Enter your name!");
  if (userName.trim() === "") {
    throw new Error("The field is empty! Please enter your Name!");
  }

  const userAgeInput = prompt("Enter your current age!");
  if (userAgeInput === null || userAgeInput === "") {
    throw new Error("The field is empty! Please enter your age!");
  }

  const userAge = +userAgeInput;
  if (userAge < 18 || userAge > 70) {
    throw new RangeError("Your age is not suitable!");
  } else if (isNaN(userAge)) {
    throw new TypeError("Your value is wrong!");
  } else {
    window.alert("You can watch the movie!");
  }
  const userStatus = prompt("Enter your status: user, moderator or admin!");
  if (
    userStatus === "user" ||
    userStatus === "moderator" ||
    userStatus === "admin"
  ) {
    window.alert("You can watch the movie!");
  } else if (userStatus.trim() === "") {
    throw new Error("The field is empty! Please enter your Status!");
  } else {
    throw new EvalError("Wrong Status!");
  }
}

try {
  checkAge();
} catch (err) {
  window.alert(err.message);
  window.alert(err.name);
  window.alert(err.stack);
}



//  Task # 3


function calcRectangleArea(width, height) {
  const areaOfRect = height * width;
  if (typeof height !== "number" || typeof width !== "number") {
    throw TypeError("Inputed invalid value!");
  } else if (width <= 0 || height <= 0) {
    throw RangeError("The input value cannot be less than or equal to 0!");
  } else {
    return areaOfRect;
  }
}

try {
  console.log(calcRectangleArea(3, 0));
} catch (ext) {
  console.log(ext.name, ext.message, ext.stack);
}


//  Task # 4

class MonthException extends Error {
  constructor(message = "Incorrect month number!") {
    super(message);
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  const months = [
    "January",
    "Fabruary",
    "Match",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (month >= 1 && month <= 12) {
    return months[month - 1];
  } else {
    throw new MonthException("Incorrect month number!");
  }
}
try {
  console.log(showMonthName(11));
  console.log(showMonthName(14));
} catch (error) {
  if (error instanceof MonthException) {
    console.log(`${error.name}: ${error.message}`);
  }
}

//  Task # 5

function showUser(id) {



  
}