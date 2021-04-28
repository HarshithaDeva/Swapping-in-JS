function PassbyReference(obj) {
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;

    console.log(`Inside Pass By ReferenceFunction -> a = ${obj.a} b = ${obj.b}`);
}

let obj = {
    a: 10,
    b: 20

}
console.log(`Before swapping or before calling Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);

PassbyReference(obj);

console.log(`After swapping or after calling Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);
