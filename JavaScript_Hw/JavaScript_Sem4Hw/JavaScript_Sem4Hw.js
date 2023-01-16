function Ex1() {
    console.log("0 - это ноль");

    for (let i = 1; i < 11; i++) {
        if (i % 2 === 0) {
            console.log(`${i} - чётное число`);
        } else {
            console.log(`${i} - нечётное число`);
        }
    }
}

//Ex1();

function Ex2() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    console.log(arr);

    let numToEject1;
    let numToEject2;

    for (let i = 0; i < arr.length; i++) {
        numToEject1 = arr.indexOf(4);
        numToEject2 = arr.indexOf(5);

        if (numToEject1 > -1) {
            arr.splice(numToEject1, 1);
        } else if (numToEject2 > -1) {
            arr.splice(numToEject2, 1);
        }
    }
    console.log(arr);
}

//Ex2();

function CreateRandomArray(length, max, min) {
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return arr;
}

function Ex3() {
    arr = CreateRandomArray(5, 0, 10);
    console.log(arr);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`Сумма всех элементов массива равняется ${sum};`);

    let minElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }
    console.log(`Самое минимальное значение элемента - ${minElement}`);

    const arrayNumCheck = arr.indexOf(3);
    if (arrayNumCheck > -1) {
        console.log(
            `Элемент со значением "3" стоит в массиве под индексом ${arrayNumCheck}.`
        );
    } else {
        console.log('Элемента со значением "3" в массиве нет.');
    }
}

//Ex3();

function slideOfCrossesMaker() {
    let cross = "×"; //символ alt + 0215

    for (let i = 1; i < 21; i++) {
        console.log(cross);
        cross += "×";
    }
}

slideOfCrossesMaker();