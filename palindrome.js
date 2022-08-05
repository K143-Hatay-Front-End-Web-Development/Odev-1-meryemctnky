function isPalindrome(number) {
  number = number.toString(); // carpım sonucunu stringe ceviriyoruz
  
//  ilk ve son karakterin ayni olup olmadigini dongu ile kontrol ediyoruz
  for(let i = 0, j = number.length; i<=j/2 ; i++) {
  	if(number.charAt(i) === number.charAt(j-(1+i))){} 
  	else {
      return false; 
    }     
  }
  return true;
}

let value = 0;
//iki dongu oluşturuyoruz ve degiskenleri çarpıyoruz

for (let i = 100; i < 1000; i++) {
  for (let k = 100; k < 1000; k++) {
      let result = k * i;

//carpim sonucunun palindrom olup olmadigini kontrol ediyoruz

      if (isPalindrome(result) && result > value) {
          value = result;
          var numOne = i;   
          var numTwo = k;
      }
  }
}
console.log(`${value} = ${numOne} * ${numTwo}`);


