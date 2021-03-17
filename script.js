

const myColorArray = ["yellow", "blue", "red", "orange"];
/*
// while loop: 4 regels nodig:
/* let i = 0;
while (i < myColorArray.length) {
    console.log(myColorArray[i]);
    i++;
} */

//for loop: 3 regels nodig
/* for (let i = 0; i < myColorArray.length; i++) {
    console.log(myColorArray[i]);
}
 */

//arrey for each method: 1 regel nodig. minder kans op fouten. makkelijker in het gebruik. 

myColorArray.forEach(element => console.log(element));


var obj = {
    name: "Simon",
    age: "20",
    clothing: {
        style: "simple",
        hipster: false
    }
}

for (var propt in obj) {
    console.log(propt + ': ' + obj[propt]);
}

// nee niet itereren, alles wordt 1x genoemd