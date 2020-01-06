console.log('greeting module');
let currentDate = new Date();
module.exports.getMessage = function(name){
    let hour = currentDate.getHours();
    if(hour > 16 && 24 < hour)
    return "Good evening, " + name;
    else if(hour > 10 && 16 >= hour)
    return 'Good afternoon, ' + name;
    else (hour < 10 && 0 < hour)
    return 'Good morning, ' + name;
}
