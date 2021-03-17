function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

var meter = kilometerToMeter(5);
console.log(meter);



function budgetCalculator(watch, phone, laptop){
    var budget = 0;
    var watch = watch * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
    budget = watch + phone + laptop;
    return budget;
}
var budget = budgetCalculator(4, 3, 2);
console.log(budget);



function hotelCost(day){
    var cost = 0;
    if(day <= 10){
        cost = day * 100;
    }
    else if(day <= 20){
        var firstPeriod = 10 * 100;
        var remainingDay = day - 10;
        var secondPeriod = remainingDay * 80;
        cost = firstPeriod + secondPeriod;
    }
    else{
        var firstPeriod = 10 * 100;
        var secondPeriod = 10 * 80;
        var remainingDay = day - 20;
        var thirdPeriod = remainingDay * 50;
        cost = firstPeriod + secondPeriod + thirdPeriod;
    }
    return cost;
}
var cost = hotelCost(30);
console.log(cost);


function megaFriend(arr){
    var result = '';
    for(var i = 0; i < arr.length; i++){
        var currentItem = arr[i];
        if(currentItem.length > result.length){
            result = arr[i];
        }
    }
    return result;
}
var friends = ['Mahmud', 'Rakib', 'Sohel', 'Abdullah'];
console.log(megaFriend(friends));