/*
Regex Method :
function telephoneCheck(str) {
  // Utilisez cette expression régulière pour valider le format du numéro
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  return regex.test(str);
}
*/ 
/*
My initial solution : 

function telephoneCheck(str) {
  let strCleaned = str.replace(/[^0-9]/g, '');
  if (strCleaned.length == 10) {
    return true
  } else if (strCleaned.length === 11 && strCleaned.split('')[0] === '1') {
    return true
  } 
  else {
    return false
  }

}

*/
