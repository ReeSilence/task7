/*--------------Задание 1--------------*/
/*  Напишите функцию, которая параметром будет получать дату,
а возвращать день недели словом, соответствующий этой дате.*/
console.log("Задание 1");

function getDay(date){
  let day = ["воскресенье","понедельник", "вторник", "среда","четверг", "пятница", "суббота"];
  dateDay = date.getDay();
  currentDay = day[dateDay];
  return currentDay
}

let currentDate = new Date();
console.log("Текущий день недели: ", getDay(currentDate));

/*--------------Задание 2--------------*/
//  Напишите функцию, которая сообщит сколько дней осталось до нового года.
console.log("Задание 2");

function daysUntilNewYear(date2){
  let currentYear = date2.getFullYear();
  let newYearDate = new Date(currentYear + 1, 0, 1);
  let daysCounter = Math.floor(((newYearDate - date2)/(24 * 60 * 60 * 1000)));
  return daysCounter
}

let currentDate2 = new Date();
let finalCounter = daysUntilNewYear(currentDate2);

if (finalCounter % 10 == 1){
  console.log(`До нового года осталось: ${daysUntilNewYear(currentDate2)} день`);
}
else if (finalCounter % 10 == 2 || finalCounter % 10 == 3 || finalCounter % 10 == 4) {
  console.log(`До нового года осталось: ${daysUntilNewYear(currentDate2)} дня`);
}
else {
  console.log(`До нового года осталось: ${daysUntilNewYear(currentDate2)} дней`);
}

/*--------------Задание 3--------------*/
/*  Напишите функцию, которая вернет предыдущий, текущий и следующий
дни недели словом в виде следующего объекта:
{
	next: 'пн',
	curr: 'вс',
	prev: 'сб',
}*/
console.log("Задание 3");

function getWeekdays() {
  const weekdays = ["воскресенье","понедельник", "вторник", "среда","четверг", "пятница", "суббота"];
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const previousDayIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;
  const nextDayIndex = currentDayIndex === 6 ? 0 : currentDayIndex + 1;

  const weekdaysObject = {
    prev: weekdays[previousDayIndex],
    curr: weekdays[currentDayIndex],
    next: weekdays[nextDayIndex]
  };

  return weekdaysObject;
}

const weekdays = getWeekdays();
console.log(weekdays);

/*--------------Задание 4--------------*/
/*  Напишите функцию, которая параметром будет принимать милисекунды,
а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам,
в виде следующего объекта:
{
	d: 12,
	h: 10,
	m: 59,
	s: 59,
}*/
console.log("Задание 4");

function date(ms){
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    // Получаем остатки
    let remainingSeconds = seconds % 60;
    let remainingMinutes = minutes % 60;
    let remainingHours = hours % 24;

    // Возвращаем объект с результатами
    return {
        d: days,
        h: remainingHours,
        m: remainingMinutes,
        s: remainingSeconds
    };
}

let userInput2 = 1076399000;
console.log(date(userInput2));


/*--------------Задание 5--------------*/
/*  По заданной пользователем дате рождения
сообщить его возраст в годах, месяцах и днях.*/
console.log("Задание 5");

function ageCalculator(birthday){
	let currentDate5 = new Date();
	let dateDiff = currentDate5.getTime() - birthday.getTime();
	
	let personDate = new Date(dateDiff);
	let years = personDate.getUTCFullYear() - 1970;
	let months = personDate.getUTCMonth();
	let days = personDate.getUTCDay();
	
	return {years: years, months: months, days: days};
}

let userInput = prompt("Введите дату рождения в формате Год-Месяц-День: ");
let birthDay = new Date(userInput);

let age = ageCalculator(birthDay);

console.log("Возраст: " + age.years + " лет " + age.months + " месяцев " + age.days + " дней ");


/*--------------Задание 6--------------*/
/*  Заполнить массив датами все пятниц,
на которые выпадает 13-е число в текущем году.*/
console.log("Задание 6");

function getFridaysThirteenths() {
    let today = new Date();
    let year = today.getFullYear();
    let fridaysThirteenths = [];

    for (let month = 0; month < 12; month++) {
        let date = new Date(year, month, 13);
        if (date.getDay() === 5) { // Пятница имеет значение 5 в методе getDay()
            fridaysThirteenths.push(date);
        }
    }

    return fridaysThirteenths;
}

let fridaysThirteenths = getFridaysThirteenths();
console.log(fridaysThirteenths)

/*--------------Задание 7--------------*/
/*  Написать скрипт, который при загрузке по разному в зависимости от времени суток
приветствует пользователя (например, "доброе утро", "добрый день" или "добрый вечер").
Время, в которое следует говорить то или иное приветствие, выберите сами.*/
console.log("Задание 7");

function getGreeting() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Доброе утро!";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Добрый день!";
    } else if (currentHour >= 18 && currentHour <= 23 ) {
        greeting = "Добрый вечер!";
    } else {
        greeting = "Доброй ночи!";
    }

    return greeting;
}

const greeting = getGreeting();
console.log(greeting);

/*--------------Задание 8--------------*/
/*Выведите на экран на какие дни недели выпадают
в этом году официальные государственные праздники.*/
console.log("Задание 8");

function getWeekday(date) {
    const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return weekdays[date.getDay()];
}

// Массив с датами государственных праздников
const holidays = [
    new Date(2023, 0, 1),   // Новый год
    new Date(2023, 0, 7),   // Православное Рождество
    new Date(2023, 1, 23),  // День защитника Отечества
    new Date(2023, 2, 8),   // Международный женский день
    new Date(2023, 4, 1),   // Праздник Весны и Труда
    new Date(2023, 4, 9),   // День Победы
    new Date(2023, 5, 12),  // День России
    new Date(2023, 10, 4),  // День народного единства
];

// Вывод дней недели для каждого праздника
holidays.forEach((holiday) => {
    const weekday = getWeekday(holiday);
    console.log(holiday.toDateString() + " выпадает на " + weekday);
});