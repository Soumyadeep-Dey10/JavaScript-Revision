let a = "hello"
let b = 'kolkata'
let c = `Salt lake`

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);

//String interpolation or, template literals
// let x = 10
// let y = 20
// console.log("Addition of x & y is x + y");
// console.log('Addition of x and y is ${x + y}');
// console.log(`Addition of ${x} and ${y} is : ${x + y}`);

//String inbuilt methods

//1.length
let str1 = "kolkata"
console.log(str1.length);
//2.toUpperCase()
let str2 = "kolkata"
console.log(str2.toLowerCase());

// 3.toLowerCase()
let str3 = "KOLKATA"
console.log(str3.toUpperCase());

//4.charAt(index)
let str4 = "kolkata"
console.log(str4.charAt(3));

//5. charCodeAt(index)
let str5 = "kolkata"
console.log(str5.charCodeAt(6));
console.log(str5.charCodeAt(0));

// 6.replace(old char, new char)
let str6 = "kolkata"
console.log(str6.replace("a", "zzzz"));

// 7.replaceAll(old, char)
let str7 = "Virattt"
console.log(str7.replaceAll("t", "z"));

// 8. slice(start index, end index)
let str8 = "kolkata"
console.log(str8.slice(0, 5));
console.log(str8.slice(-6)); //-6 to last means -6 to till -1,as 0 not allowed for negative indexing
console.log(str8.slice(-6, -1));

// 9.substring
let str9 = "kolkata"
console.log(str9.substring(0, 5));
console.log(str9.substring(-5)); //if - index given in the first parameter, it will consider complete string
console.log(str9.substring(-6, -1)); //not allowed for substring

// 10. substr(start index, how many character to fetch)
let str10 = "kolkata"
console.log(str10.substr(0, 4));
 
//11. split()
let str11 = "kolkata"
console.log(str11.split());
let strr11 = "kolkata is a city"
console.log(strr11.split(" "));

// 12.trimStart()
let str12 = "   kolkata is a city"
let bigi = str12.trimStart()
console.log(bigi.length);

// 13.trimEnd
let str13 = "   kolkata is a city   "
let bigiii = str12.trimEnd()
console.log(bigiii.length);

//14. trim(trimStart + trimEnd)
let str14 = "   kolkata is a city   "
let bigiiiiiiiii = str14.trimEnd()
console.log(bigiiiiiiiii.length);

// 15. padstart(target length, char)
let str15 = "5"
console.log(str15.padStart(5, "0"));

// 16. padEnd
let str16 = "5"
console.log(str16.padEnd(7,"*"));

// 17. includes
let str17 = "abcnf"
console.log(str17.includes("f"));

//18. indexOf() : returns the first occurance of target 
let str18 = "kolkataisacity"
console.log(str18.indexOf("t"));

// 19.lastIndexOf()
console.log(str18.lastIndexOf("t"))

// 20. startsWith
let str20 = "Kolkata"
console.log(str20.startsWith("k"));

// 21.endsWith
let str21= "kolkata"
console.log(str21.endsWith("a"));

// 22.repeat()
let str22 = "Hello"
console.log(str22.repeat(10));

// 23.search
let str23 = "Soumyadeep"
console.log(str23.search("o"));


// 24. concat
let str24 = "Hello"
let str25 = "Hi"
console.log(str24.concat(" ", str25));






