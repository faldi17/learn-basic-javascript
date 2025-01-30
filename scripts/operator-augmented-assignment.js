// addition
let result = 1 + 2; // 3
document.writeln("<p>1 + 2 = " + result + "</p>");
let originalResult = result; // 3

// subtraction
result -= 1; // 2
document.writeln("<p>" + originalResult + " - 1 = " + result + "</p>");
originalResult = result; // 2

// multiplication
result *= 2; // 4
document.writeln("<p>" + originalResult + " x 2 = " + result + "</p>");
originalResult = result; // 4

// division
result /= 2; // 2
document.writeln("<p>" + originalResult + " : 2 = " + result + "</p>");
originalResult = result; // 2

// exponentiation
result **= 3; // 8
document.writeln("<p>" + originalResult + "<sup>3</sup> = " + result + "</p>");
originalResult = result; // 8

// modulus
result %= 3; // 2
document.writeln("<p>" + originalResult + " mod 3 = " + result + "</p>");
