function palindrome(str) {
  let replacedString = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let reversedString = replacedString.split('').reverse().join('');

  if (reversedString === replacedString) {
  return true;
  }
  else {
    return false;
  }
}

palindrome("eye");