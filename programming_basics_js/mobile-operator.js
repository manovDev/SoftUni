function mobileOperator(input) {
    let time = input.shift();
    let type = input.shift();
    let mobileNetwork = input.shift();
    let months = input.shift();

    let oneYearSmall = 9.98;
    let oneYearMiddle = 18.99;
    let oneYearLarge = 25.98;
    let oneYearExtraLarge = 35.99;

    let twoYearsSmall = 8.58;
    let twoYearsMiddle = 17.09;
    let twoYearsLarge = 23.59;
    let twoYearsExtraLarge = 31.79;
    
    if (time == "one" && type == "Small") { 
        if (mobileNetwork == "yes") {
            if (oneMonth <= 10.00) {
                console.log(`${(oneYearSmall + 5.50 * months).toFixed(2)} lv.`);
            }else if(oneYearSmall <= 30.00 && oneYearSmall > 10.00) {
                console.log(`${(oneYearSmall + 4.35 * months).toFixed(2)} lv.`);
            }else if (oneYearSmall > 30.00) {
                console.log(`${(oneYearSmall + 3.85 * months).toFixed(2)} lv.`);
            }
        }else if (mobileNetwork == "no") {
            console.log(`${(oneYearSmall * months).toFixed(2)} lv.`);
        }
    }else if (time == "one" && type == "Middle") { 
        if (mobileNetwork == "yes") {
            if (oneMonth <= 10.00) {
                oneMonth = oneYearMiddle + 5.50;
                console.log(`${(oneMonth * months).toFixed(2)} lv.`);
            }else if(oneYearMiddle <= 30.00 && oneYearMiddle > 10.00) {
                oneMonth = oneYearMiddle + 4.35;
                console.log(`${(oneMonth * months).toFixed(2)} lv.`);
            }else if (oneYearMiddle > 30.00) {
                oneMonth = oneYearMiddle + 3.85;
                console.log(`${(oneMonth * months).toFixed(2)} lv.`);
            }
        }else if (mobileNetwork == "no") {
            console.log(`${(oneYearMiddle * months).toFixed(2)} lv.`);
        }
    }else if (time == "one" && type == "Large") { 
        if (mobileNetwork == "yes") {
            if (oneMonth <= 10.00) {
                oneMonth = oneYearLarge + 5.50;
                console.log(`${(oneMonth * months).toFixed(2)} lv.`);
            }else if(oneYearLarge <= 30.00 && oneYearLarge > 10.00) {
                oneMonth = oneYearLarge + 4.35;
                console.log(`${(oneMonth * months).toFixed(2)} lv.`);
            }else if (oneYearLarge > 30.00) {
                oneMonth = oneYearLarge + 3.85;
                console.log(`${(oneMonth * months).toFixed(2)} lv.`);
            }
        }else if (mobileNetwork == "no") {
            console.log(`${(oneYearLarge * months).toFixed(2)} lv.`);
        }
    }else if (time == "one" && type == "ExtraLarge") { 
        if (mobileNetwork == "yes") {
            if (oneMonth <= 10.00) {
                oneMonth = oneYearExtraLarge + 5.50;
                console.log(`${(oneMonth * months).toFixed(2)} lv.`);
            }else if(oneYearExtraLarge <= 30.00 && oneYearExtraLarge > 10.00) {
                oneMonth = oneYearExtraLarge + 4.35;
                console.log(`${(oneMonth * months).toFixed(2)} lv.`);
            }else if (oneYearExtraLarge > 30.00) {
                oneMonth = oneYearExtraLarge + 3.85;
                console.log(`${(oneMonth * months).toFixed(2)} lv.`);
            }
        }else if (mobileNetwork == "no") {
            console.log(`${(oneYearExtraLarge * months).toFixed(2)} lv.`);
        }
    }console.log(oneMonth);
}
mobileOperator(["one","Small","yes","10"]);
