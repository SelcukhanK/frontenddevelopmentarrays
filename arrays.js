let pasta1 = document.getElementById("spaghetti");
let pasta2 = document.getElementById("macaroni");
let pasta3 = document.getElementById("tagliatelli");
let pasta4 = document.getElementById("lasagne");


let leeg = [];

let spaghetti = [
    "spaghetti met ham en kaas",
    "spaghetti met spinazie en room",
    "spaghetti met gehakt-tomatensause en kaas"];

let spaghetti1 = spaghetti[0];
let spaghetti2 = spaghetti[1];

console.log(spaghetti.length);

spaghetti.push("spaghetti met spekjes, spinazie en room");
spaghetti.unshift("spaghetti met courgette en tomatensaus");

for (let count = 0; count < spaghetti.length; count++) {
    console.log(spaghetti[count]);
}

let macaroni = [
    "macaroni met ham en kaas",
    "macaroni met spinazie en room",
    "macaroni met gehakt-tomatensause en kaas"];

let  macaroni1 = macaroni[0];
let macaroni2 = macaroni[1];

console.log(macaroni.length);

macaroni.push("macaroni met spekjes, spinazie en room");
macaroni.unshift("macaroni met courgette en tomatensaus");

for (let count = 0; count < macaroni.length; count++) {
    console.log(macaroni[count]);
}
let tagliatelli = [
    "tagliatelli met ham en kaas",
    "tagliatelli met spinazie en room",
    "tagliatelli met gehakt-tomatensause en kaas"];

let  tagliatelli1 = tagliatelli[0];
let tagliatelli2 = tagliatelli[1];

console.log(tagliatelli.length);

tagliatelli.push("tagliatelli met spekjes, spinazie en room");
tagliatelli.unshift("tagliatelli met courgette en tomatensaus");

for (let count = 0; count < tagliatelli.length; count++) {
    console.log(tagliatelli[count]);
}
let lasagne = [
    "lasagne met courgette en tomatensaus",
    "lasagne met room, doperwten en tomatensaus",
    "lasagne met met spinazie en tomatensaus en kaas"];

let  lasagne1 = lasagne[0];
let lasagne2 = lasagne[1];

console.log(lasagne.length);

for (let count = 0; count < lasagne.length; count++) {
    console.log(lasagne[count]);
}

pasta1.innerHTML=spaghetti;
pasta2.innerHTML=macaroni;
pasta3.innerHTML=tagliatelli;
pasta4.innerHTML=lasagne;
