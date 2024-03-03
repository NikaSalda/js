var x1 = prompt("enter first number")
var x2 = prompt("enter action")
var x3 = prompt("enter second number")

var result = ""

if(x2 == "+"){
   result = x1*1 + x3*1
   console.log("result is: " + result)
}
else if(x2 == "-"){
    result = x1*1 - x3*1
    console.log("result is: " + result)
}
else if(x2 == "*"){
    result = x1*1 * x3*1
    console.log("result is: " + result)
}
else if(x2 == "/"){
    result = x1*1 / x3*1
    console.log("result is: " + result)
}
else if(x2 != "+", "-", "/", "*"){
    console.log("something is wrong")
}



// პროექტის პირველი დავალება
// კალკულატორი