function makePalindrome(firstHalf) {
  const reversed = firstHalf.toString().split('').reverse()
  return firstHalf.toString()+reversed.join('')

}

function getLargestPalindrome() {
  let firstHalf = 999
  let found = false;
  let factors = [];
  while(!found) {
    firstHalf--;
    palin = parseInt(makePalindrome(firstHalf))
    for (let i = 999; i > 99; i--) {
      if ((palin / i) > 999 || i*i < palin) {
            break;
        }
 
        if ((palin % i == 0)) {
            found = true;
            factors[0] = palin / i;
            factors[1] = i;
            break;
        }
    }
  }
  console.log(`Found the palindrom ${palin}, which is made from ${factors[0]} *${factors[1]}`)
}

getLargestPalindrome()
