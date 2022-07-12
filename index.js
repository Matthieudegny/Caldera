
//Question n°1) ( 1min)
const printCopies = (qty) => {
return repeat(qty) ;
} 


//Question n°2)
//(4min, i started this one, searching how to do square in an other way, i found Math.pow( ), so i just changed one method by an other)
const arr = [1, 2, 4, 9]
const squared = [];
for(const x of arr) { 
squared.push(Math.pow(x,2)); 
}


//Question n°3)
//(10 min, lost some time making some researchs for a bad result, as often the best solution was the simpliest . 
//i just build the function with index of the arguments.array)
//and add a protection with a condition to have at minimum 2 arguments

function listPrintersInTheStock () {
    if (arguments.length<2) return
    const otherArguments = arguments.length-2;
    console.log(`You can find the following printers in the stock: ${arguments[0]}, ${arguments[1]} and ${otherArguments} more`)
};


//Question n°4) (20min)
//about me this.brand value is undefined, because of the fulfillInks 's scope. this is used inside so cant reach the value outside.
//2 solutions:
fulfillInks() {
    this.inks.forEach(function(ink) {
    console.log(`${printer.brand} printer : ${ink} ink fulfilled. `);
    });
};
//or use .bind() and link this to brand
const boundGetBrand = brand.bind(printer)

//Question n°5) (10min)
//declarePrinter is a function, but i don't see any declaration of this function before, 
//only: const [declarePrinter, setPrinterName] = usePrinter(); which look's like a state React hook but without the useState() at the end
//so i would say console.log(declarePrinter()); would give a null result.


//Question n°6) (5min)
//to change the value of name declared in usePrinter(), i would use a parameter
//i can now use any value when i call the function usePrinter(), and the following name (ligne 45 and 46) will take the same value.

function usePrinter(name) {
    return [
    () => `I'm the printer ${name}`,
    (newName) => name = newName
    ]
}

//Question n°7) (20 min, i took some time making research about microtask and priorities in the queue, some notions that i didn't know)
//order ->
//console.log("Printer"); is at the first lign so; first place
//setTimeout(() => console.log("Ink"), 0); setTimeout queues a task in the main task queue; fourth place
//Promise.resolve().then(() => console.log("Media")); .then() queues a microtask. Microtasks are executed as soon as the JS call stack empties; third place
//console.log("Jobs");isnt asynchronous so; second place 

//microtask have the priority on task queue, so the result of the Promise will come before the result of the setTimeOut

console.log("Printer");
setTimeout(() => console.log("Ink"), 0);
Promise.resolve().then(() => console.log("Media"));
console.log("Jobs");

//result
//Printer
//Jobs
//Media
//Ink

//Question n°8) (10min, i took some time making research about Promise.race)
//the value of promiseCode will be 3, displayed after 600 ms. Because it is the shortest delay

//Question n°9) (20min with researchs)
//i didn't manage to solve this question;
//i find some informations:
// Promise.all([p1, p2, p3]).then((results) => {
//     const total = results.reduce((p, c) => p + c);
  
//     console.log(`Results: ${results}`);
//     console.log(`Total: ${total}`);
//   });
// but is not really understable for me right now

//Question n°10) (10min)
//the first thing i see, is an await without an async function, so i would call this request like this:
//i learnt to use the try and catch for some requests
async function fetchUser() {
    try{
        const response = await fetch('/user/1234');
        const user = await response.json();
    }catch(err){
        console.log(err)
    }
}


//Question n°11) (20min)
//i didnt understant the exemple, how severals return can be present in the function printJobs, for me if one return is reach that will stop the function.
//so i created an async arrow function with a try and catch;
//i started with a variable which stock the result of printOneJob,
//and if reponse is true i return printAnotherJob()
const printJobs = async() => {

    try{

        const response = await printOneJob();
        if(response) return printAnotherJob()
       
    }catch(err){
        console.warn(err)
    }
}


/*Vues.js*/
//question n°12)
//(25min)
// as my first vue.js code, i didnt manage to solve the first question

//question n°13)
//(15min)
//i would use a function as reverseString inside my Vue.js code
//first, i separate all word's letters (with split)
//second, i reverse every letters (with reverse)
//third, i concatenate all the letters as intiial
function reverseString(str) {
    return str.split("").reverse().join("");
}

//(25min)
//i made some research about how play with listeners, but i didnt manage to find a way to have two listeners at the same time

