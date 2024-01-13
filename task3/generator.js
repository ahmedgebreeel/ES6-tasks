//the parameter passed determines the number of elements displayed from the series

function* fibonacci1 (num){
    let a = 0, b = 1;
    for (let i = 0; i < num; i++) {
      yield a;
      [a, b] = [b, a + b];
    }
}

// the parameter passed determines the max number of the displayed series should not exceed its value.

function* fibonacci2 (maxNUm){
    let a = 0, b = 1;
    while (a <= maxNUm) {
      yield a;
      [a, b] = [b, a + b];
    }
}


let generator1 = fibonacci1(10);
for (let x of generator1) {
  console.log(x);
}

let generator2 = fibonacci2(10);
for (let y of generator2) {
  console.log(y);
}



///////////////////************** another solution */

// //the parameter passed determines the number of elements displayed from the series
// function* fibonacci(num){
//   let arr = [0, 1];
//   for (let i=2; i < num; i++){
//      arr.push(arr[i-1]+arr[i-2]);
//   }
//   for (let x=0; x < arr.length; x++) {
//     yield arr[x];
//   }
// }
// let generator = fibonacci1(8);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());



// // the parameter passed determines the max number of the displayed series should not exceed its value.


// function* fibonacci2(maxNum) {
//     let arr = [0, 1];
//     let i = 2; 
//     while((arr[i-1] + arr[i-2]) <= maxNum) {
//         arr.push(arr[i-1] + arr[i-2]);
//         i+=1;
//     }
//     for(let x = 0; x < arr.length ; x++){
//         yield arr[x];
//     }

// }


// let generator2 = fibonacci2(10);

// for (let result of generator2) {
//     console.log(result);
// }




































/////////////fibonacci in vanila js for a firts 8 values///////
// let arr = [0, 1]
// for(let i=2; i< 8; i++){
//     arr.push(arr[i-1]+arr[i-2]);
// }
// console.log(arr); ///////////[0,1,1,2,3,5,8,13]


