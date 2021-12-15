// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
// (Araştırma konusu : şart blokları : if )
// Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

function findPrime(...numbers) {
  for (let i = 0; i< numbers.length; i++) {
      let count=0
      for (let j = 2; j < numbers[i]; j++) {
          if(numbers[i]%j==0)
          {
              count++
          }
          
      }
      
      if (count != 0) {
          console.log(numbers[i] + " is not a prime number.")
      }
      else {
        console.log(numbers[i] + " is a prime number.") 
      }
  }

}

findPrime(1,2,3,4,5,6,7,8,9,10,11)
console.log("*************************************************************************")

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
//İki sayı birbirinin kendisi hariç pozitif bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.

function friendNumbers(num1,num2) {
    let sum1=0,sum2=0,i
    for (let i = 0; i < num1; i++) {
        if(num1%i==0) {
            sum1=sum1+i
        }
    }
    for (let j = 0; j < num2; j++) {
        if(num2%j==0) {
            sum2=sum2+j
        }
    }
    if(num1==sum2 && num2==sum1) {
        console.log("These numbers are friend numbers.")
    }
    else{
        console.log("These numbers are not friend numbers.")
    }
}
friendNumbers(220,283)  //Not friend
friendNumbers(220,284) //Friend

console.log("*************************************************************************")

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumbers(number) {
    for (let i = 1; i < 1000; i++) {
    //Find every positive divisors except the number itself.
    let sum=0
    for (let j = 1; j < i; j++) {
        if(i%j==0) {
            sum=sum+j
        }       
    }
    if(sum==i) {
        console.log(i)
    }
   }
}
perfectNumbers()
console.log("*************************************************************************")

//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function listPrime(number) {
    for (let i = 2; i< 1000; i++) {
        let count=0
        for (let j = 2; j < i; j++) {
            if(i%j==0)
            {
                count++
            }
        }
        if(count==0){
        console.log(i)
        }
    }
  }
listPrime()