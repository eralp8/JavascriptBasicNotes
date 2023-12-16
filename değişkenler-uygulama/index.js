/* 
Öğrenci Bilgileri

1-Mert Yılmaz
   Doğum Tarihi:2001
   Notları:100 , 90 , 10

2-Eylül Demir
   Doğum Tarihi:2002
   Notları:60 , 30 , 50   


Geçer Not:50


Program Şartları:
1-Öğrencilerin yaşlarını hesaplayınız.
2-Öğrencilerin ders ortalamasını hesaplayınız.
3-Öğrencilerin kalıp kalmadığını hesaplayınız.

*/

let suankıYıl=new Date().getFullYear();
let GecmeNotu=50;

/*1.öğrenci*/ 
/*yaş hesabı*/ 
let ogr1="Mert Yılmaz";
let ogr1DogumYıl=2001;
let ogr1Yas=suankıYıl-ogr1DogumYıl;

/*not ortalama hesabı*/ 
let ogr1DersNote1=100;
let ogr1DersNote2=90;
let ogr1DersNote3=10;
let ogr1DersNoteOrt=(ogr1DersNote1+ogr1DersNote2+ogr1DersNote3)/3;
console.log(parseInt(ogr1DersNoteOrt));

/* Dersten Kalıp kalmadığının hesabı */
let ogr1DersDurum=(ogr1DersNoteOrt > GecmeNotu);
console.log(ogr1DersDurum)


/*2.öğrenci*/
/*yaş hesabı*/
let ogr2="Eylül Demir";
let ogr2DogumYıl=2002;
let ogr2Yas=suankıYıl-ogr2DogumYıl;

/*not ortalama hesabı*/
let ogr2DersNote1=60;
let ogr2DersNote2=30;
let ogr2DersNote3=50;
let ogr2DersNoteOrt=(ogr2DersNote1+ogr2DersNote2+ogr2DersNote3)/3;
console.log(parseInt(ogr2DersNoteOrt));

/* Dersten Kalıp kalmadığının hesabı */
let ogr2DersDurum=(ogr2DersNoteOrt > GecmeNotu);
console.log(ogr2DersDurum)


console.log("1. Öğrenci Geçme Durumu:",ogr1DersDurum);
console.log("2. Öğrenci Geçme Durumu:",ogr2DersDurum);