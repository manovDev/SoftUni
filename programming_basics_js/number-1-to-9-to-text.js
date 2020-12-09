function oneToNine(input) {
    let num = Number(input[0]);
    let allNums = ['','one','two','three','four','five','six','seven','eight','nine'];
    if (num >= 10 || num < 0) {
        console.log("number too big");
    }else {
        console.log(allNums[num]);
    }
}
oneToNine([10]);