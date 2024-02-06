console.log("welcome to js programs")
let temp="";
const printNumber=()=>{

    for(let i=1;i<=10;i++){
         temp+=i;
    }
    console.log(temp)
  
   

}
printNumber()
console.log("print odd number upto 100")
function printOddNumbers() {
    
    for (var i = 1; i < 100; i++) {
     
      if (i % 2 !== 0) {
       
        console.log(i);
      }
    }
  }
  
  printOddNumbers()
   console.log("table for 7")
  function printTable() {
      let num=7;
    for (let i = 1; i < 11; i++) {
            
              console.log(num*i)
    }
  }
  
  
  printTable();
 console.log("program for sum 1 to 10")
  function printSum() {
    let sum=0;
  for (let i = 1; i < 11; i++) {
           sum=sum+i
           
  }
  console.log(sum)
}


printSum();
  console.log("factorial of a number")
let n = 10; 
 
function factorial(n) { 
    let ans = 1; 
     
   
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}
 
console.log(factorial(n));