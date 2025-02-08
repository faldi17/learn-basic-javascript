// take variable
const firstName = "Faldi";
const middleName = "Putra";
const lastName = "Fadil";

const myName = `My name is ${firstName} ${middleName} ${lastName}`;
console.info(myName);

// expression templates
const nilai = 90;
const lulus = `I got a score of ${nilai}, and my passing was declared ${nilai > 75}`;
console.info(lulus);

// multi-line string
const bio = `My name is ${firstName} ${middleName} ${lastName}.
I'm a software engineer, and I'm currently working as a front-end developer.
I'm passionate about JavaScript and its ecosystem.`;

document.writeln("<pre>");
document.writeln(bio);
document.writeln("</pre>");
console.info(bio);
