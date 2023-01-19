//traditional for loop
names = ["Sammy", "Muchai", "Grace", "Cinter"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);    
}


//For In
for (const name in names) {
    console.log(names[name]);
}

//ForEach
names.forEach(name => {
    console.log(name);    
});

// For Of

for (const name of names) {
    console.log(name);    
}

// Using While loop

let index = 0;

while (index < names.length){
    console.log(names[index])
    index++;
}

// Do while Loop

do {
    console.log(names[index])
    index ++;
}while(index<names.length)
