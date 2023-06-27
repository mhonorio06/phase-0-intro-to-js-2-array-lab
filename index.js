// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
 
    function destructivelyAppendCat() {
    cats.push("Ralph");
    cats;
    }
    function destructivelyPrependCat() {
    cats.unshift("Bob");
    cats;    
    }
    function destructivelyRemoveLastCat() {
    cats.splice(-1);
    cats;
    }
    function destructivelyRemoveFirstCat() {
    cats.splice(0,1);
    cats;
    }
    function appendCat() {
        const appendCat = [...cats, "Broom"];
        return appendCat;
        cats;
    }
    function prependCat() {
        const prependCat = ["Arnold", ...cats];
        return prependCat;
        cats;
    }
    function removeLastCat() {
        const removeLastCat = cats.slice(0,-1);
        return removeLastCat;
        cats;
    }
    function removeFirstCat() {
        const removeFirstCat = cats.slice(1);
        return removeFirstCat;
        cats;
    }
