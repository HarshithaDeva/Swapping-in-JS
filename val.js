function Passbyvalue(a, b) {
    let tmp;
    tmp = a;
    a = b;
    b = tmp;
    console.log(`Inside Pass by value function -> a = ${a} b = ${b}`);
}
  
let a = 1;
let b = 2;
console.log(`Before  Function or before swapping -> a = ${a} b = ${b}`);
  
Passbyvalue(a, b);
  
console.log(`After swapping or after calling Pass by value Function -> a =${a} b = ${b}`);    