const wordSearch = (letters, word) => {
  if (word === "" || letters.length === 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  const transpose = function(matrix) {
    let arr = [];
    for (let i = 0; i < matrix[0].length; i++) {
      arr.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        {
          arr[j].push(matrix[i][j]);
        }
      }
    }
    return arr;
  };

  let transposeLetters = transpose(letters);
    
  const verticalJoin = transposeLetters.map(ls => ls.join(''));
  for (let k of verticalJoin) {
    if (k.includes(word)) {
      return true;
    }
  }

  return false;

 

 

  // Possible Cases
  // Vertical
  // Empty word matrix
  // No word given/ empty word


};

module.exports = wordSearch;