var a=10;
console.log(a);
var b="hello world"
console.log(b);
function d(){
    console.log("call the function");
}
d();
var c=13,e=2;
function mul(c,e){
    console.log("multiplication",c*e);
}
mul(c,e);

var s=10;
function marks(num){

    if(num>=85)
    {
        console.log("distinction");
    }
    else if((num<=85) && (num>=60))
    {
        console.log("firstclass");
    }
    else if((num<=60) && (num>=35))
    {
console.log("second class")
    }
    else{
        console.log("fail");
    }
}
var num =prompt("enter the number");
marks(num);

    
