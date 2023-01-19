//alert output uses alert box
//alert("Here is an alert")

// log is used for debugging
console.log("Here is an alert")

// write is used when printing to a html document
//document.write("Here is an alert")

let x=3;
let y=7;
let diameter =7;
const pie = 3.14159265

//addition function
function add(a,b){
    return (a+b);
}


console.log("SUM is: " + add(x,y));


// area of a semicircle

function areaOfSemicircle(diameter){
    return 0.5*(pie*(0.5 * diameter));
}

// using (`) template literal the symbol before 1.
console.log(`Area of a semicrcle of diameter: ${diameter} is : ${areaOfSemicircle(diameter)}`);

