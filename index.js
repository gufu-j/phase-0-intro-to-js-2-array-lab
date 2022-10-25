// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}


function appendCat(name){
    const coppyCat = [...cats, name]    
    return coppyCat
    
} 
function prependCat(name){
    const coppyCattwo = [name, ...cats];
    return coppyCattwo
}
function removeLastCat(){
    const coppythree = cats.slice(0, cats.length-1);
    return coppythree;

}
function removeFirstCat(){
    const coppyFour = cats.slice(1);
    return coppyFour;


}