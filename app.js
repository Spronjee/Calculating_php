'use strict'
let money = prompt('Ваш бюджет на месяц?', '');
console.log(money);
let time = prompt('Введите дату в формате YYY-MM-DD','');
console.log(time);
let AppObject = {
    money,
    time,
    expenses: {
        1 :prompt('Введите обязательную статью расходов в этом месяце', ''),
        2 :prompt('Во сколько обойдется?','')
    },
    optionalExpenses: {},
    income: [],
    savings : true
}

let answer = prompt('Введите обязательную статью расходов в этом месяце', '');
let answer2 = prompt('Во сколько обойдется?','');
//AppObject.expenses = answer,answer2;
//AppObject.expenses = prompt('Во сколько обойдется?','');
//AppObject.expenses = prompt('Введите обязательную статью расходов в этом месяце','');
console.log(AppObject.expenses['1'],['2']);