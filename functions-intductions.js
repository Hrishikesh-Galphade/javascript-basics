// Write a prohram you have input of bujectwise marks with outout marks 
//and calculates its overall percentage.

var marks = [70,80,90,89,50];
var outofMarks=[100,100,100,100,50];
console.log("-----------------Without Functions-----------------------------")
marathi_percent = marks[0]/outofMarks[0];
console.log(marks[0])
console.log(outofMarks[0])
console.log(marathi_percent)

english_percent = marks[1]/outofMarks[1];
console.log(marks[1])
console.log(outofMarks[1])
console.log(english_percent)

science_percent = marks[2]/outofMarks[2];
console.log(marks[2])
console.log(outofMarks[2])
console.log(science_percent)

Math_percent = marks[3]/outofMarks[3];
console.log(marks[3])
console.log(outofMarks[3])
console.log(Math_percent);

history_percent = marks[4]/outofMarks[4];
console.log(marks[4])
console.log(outofMarks[4])
console.log(history_percent)

console.log("-----------------With Functions-----------------------------")



function devide(marks,outofMarks)
{

    console.log(marks);
    console.log(outofMarks);
    console.log(marks/outofMarks);
    return marks/outofMarks;

}

marathi_percent = devide(marks[0],outofMarks[0]);
english_percent = devide(marks[1],outofMarks[1]);
science_percent = devide(marks[2],outofMarks[2]);
Math_percent = devide(marks[3],outofMarks[3]);
history_percent = devide(marks[4],outofMarks[4]);

console.log("-----------------With Functions and for loop-----------------------------")


for(var i=0;i< marks.length;i=i+1)
{
    devide(marks[i],outofMarks[i]);
    
}