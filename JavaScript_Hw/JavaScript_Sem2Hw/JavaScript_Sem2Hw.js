function numbersCheck() {
    const num1 = prompt("введите число num1");
    const num2 = prompt("введите число num2");
    if (num1 <= 1) {
        console.log("num1 меньше или равен 1");
    } else {
        console.log("num1 больше 1");
    }

    if (num2 >= 3) {
        console.log("num2 больше или равен 3");
    } else {
        console.log("num2 меньше 3");
    }
}

//numbersCheck();

function copyTheCodeIfHomeworkSaysYouToDoSo() {
    let test = true;
    if (test === true) {
        console.log("+++");
    } else {
        console.log("---");
    }
}

//copyTheCodeIfHomeworkSaysYouToDoSo();

function DecadeOfMouthFigurouter() {
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    } //Эту функцию я нашел в инете. Не до конца понимаю что к чему, а, главное, зачем

    const day = randomIntFromInterval(1, 31);
    console.log(day);
    if (day > 10) {
        if (day > 20) {
            console.log("число попадает в третью декаду месяца");
        } else {
            console.log("число попадает во вторую декаду месяца");
        }
    } else console.log("число попадает в первую декаду месяца");
}

//DecadeOfMouthFigurouter();

function numberLayOuter() {
    const numForLayOut = prompt("Введите число");
    const specifiedArray = numForLayOut.split("");

    console.log(numForLayOut);

    console.log(
        `${specifiedArray[specifiedArray.length - 3]} сотен, ${
      specifiedArray[specifiedArray.length - 2]
    } десятков, ${specifiedArray[specifiedArray.length - 1]}.`
    );
}
//Пытался сделать так, чтобы "undefined" заменялся на 0,
//но не получилось - выдавало ошибки, исправить которые мне так и не удалось...

numberLayOuter();