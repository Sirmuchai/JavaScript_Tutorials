const person = {
    firstName: "Sam",
    lastName: "Sammy",
    doB: 2023,
    //object method
    greet: function() {
        console.log(`My name is ${this.firstName} ${this.lastName} and I was born in the year ${this.doB}`);
    }
};

person.greet();