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
                str=str+"*";
            }
            
        }
        console.log(str);
    }


    