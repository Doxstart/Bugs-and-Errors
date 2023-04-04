//'use strict'

let myName

function setName(newName) {
    myNam = newName;
}

setName('Walter');
console.log('myName: ' + myName);
console.log('myNam: ' + myNam);

console.log(this);

//Linguaggi dinamici

function dinamicTypes() {
    'use strict';

    let myVar = true
    console.log(myVar);

    myVar = 14
    console.log(myVar);

    console.log('1' + 3);
}

dinamicTypes();

//Annotazioni di tipo

//val: bool
//bool -> bool //vuol dire che entra un booleana ed esce un booleano.
function invert(val){
    return !val;
}

console.log('invert(true): ' + invert(true));
console.log('invert(5): ' + invert(5));

// { firstName: String, lastName: String, getAge: () -> int } -> ()
// function printPersonData(p){
//     //...
//     console.log(p.firstName + ' ' + p.lastName + ', età: ' + p.getAge())
//     //...
// }

// let pers = {
//     firstName: 'Walter',
//     lastName: 'Paganini'
// }

// printPersonData(pers);

//(int, int) -> int
// function multiply(n1, n2) {
//     return n1 * n2;
// }

// multiply(pers, myName);

//Tipi generici

console.log('======= TEST =======');

//Array[T] -> T
function pickFirstElementOfArray(array){
    return array[0];
}

pickFirstElementOfArray(['ciao', 'mondo']); // -> 'ciao'
pickFirstElementOfArray([1, 2, 3]); // -> 1

function test(testDescription, body) {
    if (body()) {
        console.log(`TEST SUCCEEDED: ${testDescription}`);
    } else {
        console.log(`TEST FAILED: ${testDescription}`);
    }
}

test('Picking first element of array of strings', function(){
    return pickFirstElementOfArray(['ciao', 'mondo']) === 'ciao'
})

test('Picking first element of array of integers', function(){
    return pickFirstElementOfArray([1, 2, 3]) === 1
})

test('Picking first element of array of booleans', function(){
    return pickFirstElementOfArray([true, false]) === true
})

test('Picking first element of empty array', function(){
    return pickFirstElementOfArray([]) === undefined
})

//Stack di chiamate
// function a(){
//     debugger
//     b()
// }

// function b(){
//     console.log('ciao')
// }

// a()

try{
    let val = pickFirstElementOfArray(true)
    console.log('First element of array is: ' + val)
} catch(error){
    if (error === 'Non è un array') {
        console.log('Attenzione, si è verificato un errore: ' + error)
    }else if (error === 'Array vuoto') {
        console.log('Attenzione, passare un array non vuoto')
    }
}

console.log('OK');