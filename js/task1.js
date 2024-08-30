// при отриманні числа повертає певну пору року
function checkSeason(number) {
    switch (number) {
        case 1:
            return "Winter";
        case 2:
            return "Spring";
        case 3:
            return "Summer";
        case 4:
            return "Autumn";
        default:
            return "Something going wrong"
    }
}

console.log(checkSeason(7))