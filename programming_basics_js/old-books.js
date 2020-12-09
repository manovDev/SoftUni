function solve(input) {
    let wantedBook = input.shift();
    let num = Number(input.shift());
    let cnt = 0;
    let res = '';
    while(cnt <= num) {
        let checkBook = input.shift();
        if (wantedBook === checkBook) {
            res = `You checked ${cnt} books and found it.`;
            break;
        }else {
            res = `The book you search is not here!
            You checked ${cnt} books.`;
        }
        cnt++;
    }
    console.log(res);
}
solve(["Troy",
    8,
    "Stronger",
    "Life Style",
    "Troy"]);