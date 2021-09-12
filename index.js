// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield'];

console.log(cats);

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(){
    cats.push('Ralph');
}  


function destructivelyPrependCat(){
    cats.unshift('Bob');
} 

function destructivelyRemoveLastCat(){
    cats.pop();
} 

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    let newCats = cats.slice();
    newCats.push('Broom')
    return newCats;
}

function prependCat(){
    let newCats = cats.slice();
    newCats.unshift('Arnold')
    return newCats;
}

function removeLastCat(){
    let newCats = cats.slice();
    newCats.pop()
    return newCats;
}

function removeFirstCat(){
    let newCats = cats.slice();
    newCats.shift()
    return newCats;
}






