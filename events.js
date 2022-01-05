const fs= require("fs");

const start = Date.now();

setTimeout(()=>console.log("Timer  1 finished"),0);
setImmediate(()=> console.log("Immediate 1 finished"));

fs.readFile("test-file.txt",()=>{
    console.log("I/O finished");
    console.log("-----------");

    setTimeout(()=> console.log("Timer 2 finished"),1000);
    setTimeout(()=> console.log("Timer 3 finished"),5000);
    setImmediate(()=> console.log("Immediate 2 finished"),0);
    
});

console.log("Hello from the top-level code");