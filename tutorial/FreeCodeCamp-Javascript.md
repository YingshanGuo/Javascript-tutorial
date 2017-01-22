## Basic Algorithm Scripting
<ol>
    <li><a href="#BAS">Basic Algorithm Scripting</a>
    <ul>
        <li><a href="#BAS-1">reverse</a>
        <ul>
	        <li></li>
        </ul>
        </li>
        <li><a href="#BAS-2">Recursion (递归)</a></li>
        <li><a href="#BAS-3">Check for Palindromes</a></li>
    </ul>
    <li><a href="#OFP">Object Oriented and Functional Programming</li>
    <ul>
      <li><a href="#OFP-1">Declare JavaScript Objects as Variables</a></li>
      <li><a href="#OFP-2">Construct JavaScript Objects with Functions</a></li>
      <li><a href="#OFP-3">Make Instances of Objects with a Constructor Function</a></li>
      <li><a href="#OFP-4">Make Unique Objects by Passing Parameters to our Constructor</a></li>
      <li><a href="#OFP-5">Make Object Properties Private</a></li>
      <li><a href="#OFP-6">Iterate over Arrays with .map</a></li>
      <li><a href="#OFP-7">Condense arrays with .reduce</a></li>
      <li><a href="#OFP-8">Filter Arrays with .filter</a></li>
      <li><a href="#OFP-9">Sort Arrays with .sort</a></li>
      <li><a href="#OFP-10">Reverse Arrays with .reverse</a></li>
      <li><a href="#OFP-11">Concatenate Arrays with .concat</a></li>
      <li><a href="#OFP-12">Split Strings with .split</a></li>
      <li><a href="#OFP-13">Join Strings with .join</a></li>
    </ul>
</ol>    


<a id="#BAS"></a>
### Basic Algorithm Scripting
<a id="#BAS-1"></a>
#### Reverse

```
function reverseString(str) {
    return str;
}
reverseString("hello");
```
- method 1:
 - split("")
 - reverse()
 - join("")

```
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

```
- method 2:

```
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');
```
<a id="#BAS-2"></a>
#### Recursion (递归)
5! = 1 * 2 * 3 * 4 * 5 = 120

```

function factorialize(num) {
  if (num === 0) {return 1;}
  return num * factorialize(num-1);
}

factorialize(5);
```
<a id="#BAS-3"></a>
#### Check for Palindromes
- ```/[^A-Za-z0–9]/g```  or  ```/[\W_]/g```
- toLowerCase()
- replace()

```
function palindrome(str) {
  // Good luck!
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

palindrome("eye");
```

```
function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
palindrome("A man, a plan, a canal. Panama");
```

#### Find the Longest Word in a String
```

```
<a id="#OFP"></a>
###  Object Oriented and Functional Programming
<a id="#OFP-1"></a>
#### Declare JavaScript Objects as Variables

```
var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};

var motorBike = {
// Only change code below this line.
  "wheels":23,
  "engines":2,
  "seats":3
};
```

<a id="#OFP-2"></a>
#### Construct JavaScript Objects with Functions

```
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.
  var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 2;
};
```
<a id="#OFP-3"></a>
### Make Instances of Objects with a Constructor Function

```
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.
var myCar = new Car();
myCar.nickname = "twin";

```

<a id="#OFP-4"></a>
### Make Unique Objects by Passing Parameters to our Constructor

```
var Car = function(wheels,seats,engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

//Try it out here
var myCar = new Car(2,3,5);
```

<a id="#OFP-5"></a>
### Make Object Properties Private

```

```

<a id="#OFP-6"></a>
###  Iterate over Arrays with .map
```

```

<a id="#OFP-7"></a>
###  Condense arrays with .reduce

```

```

<a id="#OFP-8"></a>
### Filter Arrays with .filter

```

```

<a id="#OFP-9"></a>
### Sort Arrays with .sort

```

```

<a id="#OFP-10"></a>
###  Reverse Arrays with .reverse

```

```

<a id="#OFP-11"></a>
###  Concatenate Arrays with .concat

```

```

<a id="#OFP-12"></a>
###  Split Strings with .split

```

```

<a id="#OFP-13"></a>
###  Join Strings with .join

```

```
