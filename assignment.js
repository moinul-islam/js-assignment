//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(40560);
console.log(result, 'Mile');





//woodCalculator
function woodCalculator(chair, table , bed){
    // cubicFeet
    var countChair = chair * 1;
    var countTable = table * 3;
    var countBed = bed * 5;

    var totalWood = countChair + countTable + countBed;
    return totalWood;
}

var woodResult = woodCalculator(4, 1 , 2);
console.log(woodResult, 'Cubic Feet Wood');





//brickCalculator
function brickCalculator(floor){    
    var first10Floor = 15 * 1000 * 10;
    var elevenTo20Foloor = 12 * 1000 * 10;

    if(floor <= 10){
        var perFloor = 15 * 1000;
        var countBrick = floor * perFloor;
    }
    else if(floor <= 20){
        var perFloor = 12 * 1000;
        var countBrick =  first10Floor + (floor - 10) * perFloor;
    }
    else {
        var perFloor = 10 * 1000;
        var countBrick =  first10Floor + elevenTo20Foloor + (floor - 20) * perFloor;
    }
    return countBrick;
}

var countBrick = brickCalculator(22);
console.log(countBrick, 'Pics Brick');





//tinyFriend
function tinyFriend(name){
    var tinyName = name[0];

    for(var i = 0; i < name.length; i++){
        var friendName = name[i];

        if(friendName.length < tinyName.length){
            tinyName = friendName;
        }
    }
    return tinyName;
}

var tinyName = tinyFriend(['jahangir', 'saruf', 'moin', 'polin', 'sujon']);
console.log(tinyName, 'is your tiny friend');