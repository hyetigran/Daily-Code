//Longest String

function longestString(arr) {
  let longest = arr.reduce(function(prev, current) {
    if (prev.length == current.length) {
      return prev;
    }
    return prev.length > current.length ? prev : current;
  });
  return longest;
}

// Money formatter

function moneyFormat(float) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return formatter.format(float);
}

// Reverse String
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// Digits Raised to Consecutive Powers
function sumDigPower(a, b) {
  let results = [];
  for (let i = a; i <= b; i++) {
    let numStr = i.toString();
    let sum = 0;
    for (let j = 0; j < numStr.length; j++) {
      sum += Math.pow(Number.parseInt(numStr[j]), j + 1);
    }
    if (sum == i) {
      results.push(i);
    }
  }
  return results;
}

// Reverse Number
function reverseNumber(num) {
  return Number(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  );
}

// Rand to Rand5
function rand(a) {
  return 1 + Math.floor(Math.random() * a);
}

function rand5() {
  return rand(5);
}

// Overlapping Rectangles
function findOverlap(rect1, rect2) {
  rect1.right = rect1.leftX + rect1.width;
  rect2.right = rect2.leftX + rect2.width;
  rect1.top = rect1.bottomY + rect1.height;
  rect2.top = rect2.bottomY + rect2.height;
  let x_overlap = Math.max(
    0,
    Math.min(rect1.right, rect2.right) - Math.max(rect1.leftX, rect2.leftX)
  );
  let y_overlap = Math.max(
    0,
    Math.min(rect1.top, rect2.top) - Math.max(rect1.bottomY, rect2.bottomY)
  );

  let leftX = Math.max(0, Math.max(rect1.leftX, rect2.leftX));
  let bottomY = Math.max(0, Math.max(rect1.bottomY, rect2.bottomY));
  let width = Math.abs(leftX - Math.max(0, Math.min(rect1.right, rect2.right)));
  let height = Math.abs(bottomY - Math.max(0, Math.min(rect1.top, rect2.top)));

  if (x_overlap === 0 || y_overlap === 0) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null
    };
  }
  return {
    leftX,
    bottomY,
    width,
    height
  };
}

// Reverse Case
function reverseCase(str) {
  var result = "";
  for (let i = 0; i < str.length; i++) {
    let n = str.charAt(i);
    if (n == n.toUpperCase()) {
      n = n.toLowerCase();
    } else {
      n = n.toUpperCase();
    }
    result += n;
  }

  return result;
}

// Stack Class
class Stack {
  constructor(storage) {
    this.storage = storage;
  }

  add(item) {
    this.storage.push(item);
  }

  remove() {
    this.storage.pop();
  }
  numOfItems() {
    if (this.storage.length === 0) {
      return "There are no items in your Stack";
    } else {
      return this.storage.length;
    }
  }
}
const myStack = new Stack([]);
console.log(myStack.numOfItems()); // <--- "There are no items in your Stack."
myStack.add("first");
myStack.add("second");
myStack.add("third");
console.log(myStack.numOfItems()); // <--- 3
console.log(myStack.storage); // <--- [ 'first', 'second', 'third' ]
myStack.remove();
console.log(myStack.storage); // <--- [ 'first', 'second' ]
myStack.remove();
console.log(myStack.storage); // <--- [ 'first' ]
myStack.remove();
console.log(myStack.storage); // <--- []
console.log(myStack.numOfItems()); // <--- "There are no items in your Stack."

// Vowel Count (for loop)
function vowelCount(str) {
  var vowel_list = "aeiouAEIOU";
  var vcount = 0;

  for (var x = 0; x < str.length; x++) {
    if (vowel_list.indexOf(str[x]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}

// Vowel Count (regex)
function vowelCount2(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

// Telephone Words
const phoneDigitsToLetters = {
  0: "0",
  1: "1",
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ"
};

function telephoneWords(str) {
  //console.log(str.split(''))
  // make results array
  var words = [];
  // make inner recursive function (word, digitsLeft)
  var lettersForDigits = function(word, digits) {
    // base case: if no digits left, push word to results
    if (digits.length === 0) {
      return words.push(word);
    }
    // grab current digit from digitsLeft
    // for each letter option, add letter to word and recurse
    phoneDigitsToLetters[digits[0]].split("").forEach(function(letter) {
      lettersForDigits(word + letter, digits.slice(1));
    });
  };
  // invoke recursive function
  lettersForDigits("", str.split(""));
  // return results array
  return words;
}

// To Binary String
function toBinaryString(number) {
  var num = number;
  if (num === 0) {
    return "0";
  }
  var result = [];
  while (num >= 1) {
    result.unshift(Math.floor(num % 2));
    num = num / 2;
  }
  return result.join("");
}
