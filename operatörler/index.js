var number1 =10;
var number2 =20;
var number3 =30;
var result;

//! 1-Aritmatik Operatörler
//?  + , - , / , * , % , ++ , --
/*result=number1+number2+number3;
result=number1-number2-number3;
result=number1/number2/number3;
result=number1*number2*number3;
result=number1%number2%number3;
result=number1++;
result=++number1;*/


//! 2-Atama Operatörleri
//?   = , += , -= , /= , *= , %= 
//result = number1;
//result +=number2; /*result+number2;*/
//result -=number2; /*result-number2;*/
//result *=number2; /*result*number2;*/
//result /=number2; /*result/number2;*/
//result %=number2; /*result%number2;*/
//console.log(result);


//! 3-Karşılaştırma Operatörleri
//?  == , != , === , > , < , >= , <= 
//result= number1 == number2;
//result= number1 != number2;
//result= 10==="10";/*Tip Kontrolü*/ 
//result = number1 > number2;
//result = number1 < number2;
//result = number1 >= number2;
//result = number1 <= number2;
//console.log(result);


//! 4-Mantıksal Operatörler
//? &&:ve ,||:veya , !:Tersi

//&& ve: iki şartıda sağlaması lazım
console.log(number1!==number2 && number1>number2);

// || veya:true için bir şartı sağlaması yeterli
console.log(number1>number3||number1===number1);

/* ! tersi,değili */
console.log(!(number1>number3)&&number2>=number1);