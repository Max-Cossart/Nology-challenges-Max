//  Moon Orbits 

function moonOrbits(days) {
    return (days / 27).toFixed(2)
}

console.log(moonOrbits(365))


//  Working with Circles

function circleArea(rad) {
    return Math.PI * rad ** 2
}

function circlePerimeter(rad) {
    return (2 * Math.PI * rad).toFixed(2)
}

console.log(circlePerimeter(5))

//  Years to Days and Seconds

function ageInDays(years) {
    return years * 365
}

function ageInSeconds(years) {
    return years * 365 * 24 * 60 * 60
}

console.log(ageInSeconds(25))


//  Return the Remainder from Two Numbers

function remainder(num1, num2) {
    return num1 % num2
}

console.log(remainder(3, 4))

//  Basketball Points

function totalPoints(twos, threes) {
    return (twos * 2) + (threes * 3)
}

console.log(totalPoints(28, 16))

//  Less than 100

function lessThan100(num1, num2) {
    if (num1 + num2 >= 100) {
        return false
    }else{
        return true
    }
}

console.log(lessThan100(89, 10))