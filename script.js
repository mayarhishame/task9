const x = Number(prompt("enter your exam score"));
if (x >= 85 && x < 100) {
  console.log("You got an A");
} else if (x >= 75 && x < 85) {
  console.log("You got a B");
} else if (x >= 65 && x < 75) {
  console.log("You got a C");
} else if (x >= 50 && x < 65) {
  console.log("You got a D");
} else if (x >= 0 && x < 50) {
  console.log("You got a f");
} else if (isNaN(x)) {
  console.log("Not a Number");
} else if (x > 100 || x < 0) {
  console.log("Invalid Score");
} else if (x === 100) {
  console.log("Perfect Score");
}

switch (true) {
  case x === 100:
    console.log("Perfect Score");
    break;
  case x >= 85 && x < 100:
    console.log("You got an A");
    break;
  case x >= 75 && x < 85:
    console.log("You got a B");
    break;
  case x >= 65 && x < 75:
    console.log("You got a C");
    break;
  case x >= 50 && x < 65:
    console.log("You got a D");
    break;
  default:
    console.log("You got an F");
}
