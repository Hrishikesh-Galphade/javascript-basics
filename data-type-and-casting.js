var number=10;
var string='Sandeep';
var boolean = true;
var array=[1,2.2,'c','strinf',{"Name":"Sandeep"}];
var testUndefined;

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof array);
console.log(typeof testUndefined);


var a='10.10';
console.log(typeof a);
console.log(a+1);//a contains string data type value and 1 is a number type but when therie is operation on string element the number will ge converted into the string;
// '10'+ '1'=101//string

var a_convertion_to_number= Number(a)// the value conatins in the a is a type of string but using the inbuilt Number function we have converted value of string type into the number.
console.log(typeof a_convertion_to_number);
console.log(a_convertion_to_number+1);

var a_convertion_to_float_value= parseInt(a)
console.log(typeof a_convertion_to_float_value);
console.log(a_convertion_to_float_value+1);


console.log(10+20+"abc")//30abc
console.log(10+20+"abc"+30+40)//30abc3040
console.log("abc"+30+40)//abc3040
console.log(true+1)//abc3040 inter true =1
console.log(false+1)//abc3040 inter false =0