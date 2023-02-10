// Arithmetic Operators
// Addition

let a = 10;
let b = 20;

let c = a + b;
console.log(c);

// Subtraction

let d = 12;
let e = 10;

let f = e - d;
console.log(f);

// miltiplication

let g = 10;
let h = 2;

let i = g * h;
console.log(i);

// Division

let j = 100;
let k = 5;

let l = j / k;
console.log(l);

// Modulus

let m = 20;
let n = 2;

let o = m % 2;
console.log(o);

// Exponetiation

let p = 12;
let q = 2;

let r = p ** q;
console.log(r);

// Increment  pre

let s = 12;
let t = ++s;

console.log(t);

// Increment  post

let u = 15;
let v = u++;

console.log(v);

// Decrement  pre

let w = 10;
let x = --w;

console.log(x);

// Decrement  post

let y = 20;
let z = y--;

console.log(z);

// Assignment operators
// simple assignment

var aa = 10;

// Addition assignment (+=)

var aa = 20;
aa += 5;
console.log(aa);

// Subtraction assignment (-=)

var aa = 10;
aa -= 2;
console.log(aa);

// Multiplication assignment (*=)

var aa = 10;
aa *= 2;
console.log(aa);

// Division assignment (/=)

var aa = 100;
aa /= 5;
console.log(aa);

// Modulus assignment (%=)

var aa = 50;
aa %= 5;
console.log(aa);

// Exponentiation assignment (**=)

var aa = 12;
aa **= 2;
console.log(aa);

// Comparision operators
// Equal to (==)

var aa = 10;
var bb = 10;
console.log(aa == bb);

// Not equal to (!=)

var aa = 10;
var bb = 20;
console.log(aa != bb);

// Strict equal to (===)

var aa = 10;
var bb = "20";
console.log(aa === bb);

// Strict not equal to (!==)

var aa = 10;
var bb = "20";
console.log(aa !== bb);

// Greater than (>)

var aa = 20;
var bb = 10;
console.log(aa > bb);

// Less than (<)

var aa = 10;
var bb = 20;
console.log(aa < bb);

// Greater than or equal to (>=)

var aa = 10;
var bb = 10;
console.log(aa >= bb);

// Less than or equal to (<=)

var aa = 10;
var bb = 10;
console.log(aa <= bb);

// Logical operators
// AND (&&)

var xx = 5;
var yy = 10;

if (xx < 10 && yy > 5) {
    console.log("Both conditions are true");
} else {
    console.log("At least one condition is false");
}

// OR (||)

var xx = 5;
var yy = 10;

if (xx < 10 || yy < 5) {
    console.log("At least one condition is true");
} else {
    console.log("Both conditions are false");
}

// NOT (!)

var xx = 5;
var yy = 10;

if (!(xx > 10)) {
    console.log("x is not greater than 10");
}

if (!(yy < 5)) {
    console.log("y is not less than 5");
}

// Conditional (Ternary) Operator

var xx = 5;
var result = xx > 10 ? "xx is greater than 10" : "xx is not greater than 10";

console.log(result);

// Bitwise operators
// AND operator (&)

var aa = 10;
var bb = 20;

var result = aa & bb;
console.log(result);

// OR operator (|)

var aa = 40;
var bb = 40;

var result = aa | bb;
console.log(result);

// XOR operator (^)

var aa = 10;
var bb = 20;

var result = aa ^ bb;
console.log(result);

// NOT operator (~)

var aa = 10;
var bb = -16;

console.log(~aa);
console.log(~bb);

// left shift operator (<<)

var aa = 8;
var bb = 3;

var result = aa << bb;
console.log(result);

// Right shift operator (>>)

var aa = 5;
var bb = 2;

var result = aa >> bb;
console.log(result);

// Unsigned Right Shift operator (>>>)

var aa = 8;
var bb = 2;

var result = aa >>> bb;
console.log(result);

// String Operators

console.log("Hello" + "World");

// Comma Operators

var aa = 10, bb = 20;
var result = (aa++, bb++, aa + bb);

console.log(aa);
console.log(bb);
console.log(result);

// BigInt Operator

var aa = 326745236536536516541n;
var bb = 625328787327382678326786n;

console.log(aa + bb);

// Unary operator
// Plus (+)

var aa = 10;
var bb = "11";

var result = +aa;
var result1 = +bb;
console.log(result);
console.log(result1);

// Negative (-)

var aa = 10;
var bb = "11";

var result = -aa;
var result1 = -bb;
console.log(result);
console.log(result1);

// Logical NOT

var aa = 10;
var bb = 15;

var result = !(aa > bb);
console.log(result);

// Bitwise NOT

var aa = 10;
    
var result = ~aa;
console.log(result);

// typeof

var aa = 10;
var bb = "10";

var result = typeof aa;
var result1 = typeof bb;
console.log(result);
console.log(result1);

// delete

mobile = {
    Brand: "Jaguar",
    model: "...",
    color: "Light Gray"
}
console.log(mobile);
delete mobile.model;
console.log(mobile);