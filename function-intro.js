// function ConverToDollerToRupee(value){
//     return value*83;
// }

// function ConverToDollerToRupeeV2(value){
//      console.log(value*83);
// }

// var result = ConverToDollerToRupee(5);
// console.log(result)

// console.log(ConverToDollerToRupee(100));

// ConverToDollerToRupeeV2(10);

//------Default value parameters--------

// function ConverToDollerToRupee(value=15){
//     return value*83;
// }

// function ConverToDollerToRupeeV2(value=15){
//      console.log(value*83);
// }

// var result = ConverToDollerToRupee(5);
// console.log(result)

// console.log(ConverToDollerToRupee(100));

// ConverToDollerToRupeeV2(10);
// ConverToDollerToRupeeV2();//Taking default value 15 because we are not passing any parameter
// //hence the output is 83*15


// function addition(a,b=10,c=5){
//     return a+b+c;
// }

// console.log(addition(3,4))
// console.log(addition(3))
// console.log(addition(3,5,5))

//- Scope of Veriables

var dout=1;
var kout=2;
let pout=3;
const kkout=5;

function addition(a,b=10,c=5){
    var d=1;
    var k=2;
    let p=3;
    const kk=10;

    console.log(dout,kout,pout,kkout);
    dout=10;
    kout=14;
    pout=18;
    return a+b+c;
}



console.log(addition(3,4))
console.log(dout,kout,pout,kkout);
console.log(addition(3))
console.log(dout,kout,pout,kkout);
console.log(addition(3,5,5))
console.log(dout,kout,pout,kkout);
console.log(d,k,p);