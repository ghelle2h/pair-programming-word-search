const wordSearch = (letters, word) => { 
    const joinArr = ls => ls.join('')
    const horizontalJoin = letters.map(joinArr)
    const transposeLetters = [];

    for(let i = 0; i < letters[0].length; i++) {
        transposeLetters.push([]);
        for(let j = 0; j < letters.length; j++) {
            transposeLetters[i].push(letters[j][i]);
        }
    }
    const verticalJoin = transposeLetters.map(joinArr);
    

    /*for(let i = 0; i <letters.length; i++){
        for(let j = 0; j <letters.length; j++){
        verticalJoin.push(letters[j][i])
        }
    */
    //vertlJoin = verticalJoin.map(ls => ls.join(''))
    
    console.log(verticalJoin);
    console.log(horizontalJoin)
    
    // console.log(horizontalJoin);
    for (l of verticalJoin) {

        if (l.includes(word)) return true;
    }
   for (l of horizontalJoin) {

        if (l.includes(word)) return true;
    }
    return false;
} 

module.exports = wordSearch

//we add return to the function so it passes the test/
// in the question it says edit wordserarch.js not test file.
//line 6 change if to return false