function isPalindrome(str) {
  const s = (str.match(/[a-z0-9]/gi) || []).join('').toLowerCase();
  return s === s.split('').reverse().join('');
}

// Examples
console.log(isPalindrome("RaceCar"));           // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("world")); 
console.log("hi");
console.log("hello");
// false
