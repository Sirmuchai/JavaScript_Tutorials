// Recursive function to get factorial


function factorial(x){
    if(x==0){
        return 1;
    }

    else {
        return x* factorial(x-1);
    }
}


function testFactorial(x){
    console.log(`The factorial of ${x} is: ${factorial(x)}`)
}

testFactorial(0);
testFactorial(1);
testFactorial(3);
testFactorial(5);
testFactorial(10);
