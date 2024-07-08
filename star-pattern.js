// var row=10;
// var column=15;

// for(var i=1;i<= row;i++)
//     {
//         var str="";
//         for(var j=1; j<= column;j++){
//             str=str+"*";
//         }
//         console.log(str);
//     }

// var row=4;
// var column=4;

// for(var i=1;i<= row;i++)
//     {
//         var str="";
//         for(var j=1; j<= column;j++){
            
//             if(j<= row-i)
//             {
//                 str=str+" ";
//             }
//             else{
//                 str=str+"*";
//             }
            
//         }
//         console.log(str);
//     }



// var i=2;
// var j=5;
// var str='*';
// var strwithnumber='1';
// console.log(i + j);
// console.log(i.toString())
// console.log(j.toString())
// console.log(i.toString() + j.toString()); // 25
// console.log(str+i);
// console.log(j+str);
// console.log(strwithnumber+i);
// console.log(j+strwithnumber);

for(var i=1;i<=4;i++){
    str= '';
    for(var j=1;j<=4;j++){
        str= str + j;
    }
    console.log(str);
}
console.log('------------');

for(var i=1;i<=4;i++){
    str= '';
    for(var j=0;j<4;j++){
        str= str + (i+ j);
    }
    console.log(str);
}
console.log('------------');

var travel=1;
for(var i=1;i<=4;i++){
    str= '';
    for(var j=0;j<4;j++){
        str= str + travel + ' ';
        travel = travel+1;
    }
    console.log(str);
}
console.log('------------');

for(var i=1;i<=4;i++){
    str= '';
    for(var j=0;j<i;j++){

        if(j%2==0){
            str= str + '*';
        }
        else{
            str= str + '#';
        }
        
    }
    console.log(str);
}
console.log('------------');

for(var i=1;i<=4;i++){
    str= '';
    for(var j=1;j<=4;j++){
        str= str + (j*j) + " ";
    }
    console.log(str);
}
console.log('------------');

var row=4;
var column=4;

for(var i=1;i<= row;i++)
    {
        var str="";
        for(var j=1; j<= column;j++){
            
            if(j<= row-i)
            {
                str=str+" ";
            }
            else{

                if( j % 2 == 0){
                    str=str+"*";
                }
                else{
                    str=str+"#";
                }
                
            }
            
        }
        console.log(str);
    }

