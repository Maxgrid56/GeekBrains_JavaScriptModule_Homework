function temperatureConvertor() {
    const celsius = Number(prompt('введите температуру в градусах Цельсия'));
    console.log(9 / 5 * celsius + 32);
}

function something_IDKHowToNameThat() {
    const username = prompt("напишите своё имя", 'Например: Григорий');
    const admin = username;
    console.log(admin);
    alert("глянь в консоль")
}

const choose = confirm('выберите одну из функций: Да - Переводчик из системы исчисления Цельсий в Фаренгейт; Нет - ... ну эта функция что-то да делает');

if (choose === true) {
    temperatureConvertor();
} else {
    something_IDKHowToNameThat();
}