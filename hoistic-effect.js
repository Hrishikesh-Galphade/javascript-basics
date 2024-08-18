// console.log(a)
// var a;


function addition(a, b) {
    var k;

    {
        let p = 10;// Let declre p is not accessible out of block i.e{}
        var d=16// but d is declared as var it can accessible out of the block.
        console.log("p in block:" + p);
    }

    //console.log("p in out of block:" + p); this line will give error because we are trying to use let veriable outof block but let veriable can not be accessible out of box.
    console.log("d in out of block:" + d);// This line print the value of d because d declare as var in above block and due to hoistic effect it can be accessble to that function.
    console.log(a + b);
}

addition(2,4);