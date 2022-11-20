// function scope

let subject = "create video";

function createThink(subject) {
  return subject;
}

console.log(subject);
console.log(createThink(subject));

// arrow function

const sayMyName = () => {
  console.log("Mayk");
};

sayMyName();


// function constructor

function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " está andando";
  };
}