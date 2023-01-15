function Ex1() {
    const num1 = Number(prompt("Введите первое число"));
    const num2 = Number(prompt("Введите второе число"));
    const num3 = Number(
        prompt(
            "Введите число, в степени которого будут считаться сумма первых двух чисел"
        )
    );
    console.log(
        `${num1}^${num3} + ${num2}^${num3} = ${num1 ** num3 + num2 ** num3}`
    );
}

//Ex1();

// function typeChecker(num) {
//     if (typeof num == String) {
//         return false;
//     } else return true;
// }

function Ex2() {
    //Не может выдать ошибки при вводе строки, вместо числа
    let checkable = Number(prompt("Введите сумму вашей зарплаты"));

    checkable = checkable * 0.87;

    if (checkable == NaN) {
        alert("Не используйте буквы");
    } else {
        console.log(
            `Размер вашей заработной платы за вычетом налогов равняется ${checkable} рублей.`
        );
    }
}

//Ex2();

function Ex3() {
    let arr = [];
    let keyboarded = String(prompt("Введите три числа через пробел"));
    arr = keyboarded.split(" ");

    numMax = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (numMax < arr[i]) {
            numMax = arr[i];
        }
    }
    console.log(`Наибольшее число из трёх - ${numMax}`);
}

//Ex3();

function Ex4() {
    function Sum(num1, num2) {
        return num1 + num2;
    }

    function Sub(num1, num2) {
        let numMax = num1;
        if (numMax < num2) {
            return num2 - num1;
        } else {
            return num1 - num2;
        }
    }

    function Multi(num1, num2) {
        return num1 * num2;
    }

    function Div(num1, num2) {
        return num1 / num2;
    }

    const choose = Number(
        prompt(
            "Выберите одну из функций: \n 1 - Сложение; \n 2 - Разность; \n 3 - Умножение; \n 4 - Деление;"
        )
    );

    const num1 = Number(prompt("Введите первое число"));
    const num2 = Number(prompt("Введите второе число"));

    if (choose === 1) {
        console.log(`Результат: ${Sum(num1, num2)}`);
    } else if (choose === 2) {
        console.log(`Результат: ${Sub(num1, num2)}`);
    } else if (choose === 3) {
        console.log(`Результат: ${Multi(num1, num2)}`);
    } else if (choose === 4) {
        console.log(`Результат: ${Div(num1, num2)}`);
    } else {
        console.log("Данное число не связанно с какой-либо функцией");
    }
}

Ex4();