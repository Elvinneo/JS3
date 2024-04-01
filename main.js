// //1

// let data1=[1,3,5,7,9,2,8,6,4,0]
// console.log(Math.max(...data1))

// // //2
// let data = [1, 3, 5, 7, 9, 2, 8, 6, 4, 13, 41, 44,47];

// for (x = 0; (x <= data.length); x++) {
//   for (i = 2; i <= data[x]; i++) {
//     if (data[x] % i == 0)  {
//       if (data[x] > i) {
//         break;
//       }
//       if (data[x] == i) {
//         console.log(data[x]);
//       }
//     }
//   }
// }

// if (data[x] % i == 0) {
//   if (data[x] > i) {
//     break;
//   }
//   if (data[x] == i) {
//     console.log(data[x]);
//   }
// }
// }
// }

// //3
// let data = [
//       "Salam",
//       "Dünyalı",
//       "JavaScript",
//       "Programlaşdırma",
//       "Kod",
//       "Frontend",
//       "Backend",
//     ];
// const yeddi= data.filter((x)=>(x.length==7))
// console.log(yeddi)

//4
// let boy = +prompt("Boy daxil edin");
// let kilo = +prompt("Kutle daxil edin");

// let index = ceil.(kilo/(boy**2));

// if (index <= 18) {
//   console.log(`${index} ideal`);

// } else if (18 < index && index <= 25) {
//   console.log(`${index} Ideal ceki`);

// } else if (25 < index && index <30 ){
//   console.log(`${index} Ideal cekiden yuxari`);

// } else if (30 < index && index <40) {
//   console.log(`${index} Artiq ceki obez`);

// } else if (index > 40) {
//   console.log(`${index} Artiq ceki piylenme`);
// }




// // 5 

// let point = +prompt("Qiymətinizi daxil edin (0 - 100):");


// if (point>89  && point <100) {
//   console.log(`Əla`);

// } else if (point>74  && point <90) {
//   console.log(`Yaxşı`);

// } else if (point>54  && point <75 ){
//   console.log(`Orta`);

// } else if (point>30  && point <55) {
//   console.log(`Kafi`);

// } else if (point>0  && point <30) {
//   console.log(`Pis`);
// }

// //6
// let ka1=+prompt("Birinci kateti daxil edin")
// let ka2=+prompt("ikinci kateti daxil edin")
// let hipotenuz=Math.sqrt(ka1**2+ka2**2)
// console.log(`Hipotenuz ${hipotenuz}`)
