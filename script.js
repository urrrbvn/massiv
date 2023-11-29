let array = []
//Задаю цикл, который сгенерирует массив из случайных чисел
for (let i = 0; i < 99; i++) {
  array.push(Math.floor(Math.random() * 100));
}
//Функция createTable создаст и заполнит таблицу
function createTable() {
    let num = 0;
    // Обращаюсь к элементу tbody, чтобы указать его в переменной
    let tbody = document.body.firstElementChild.firstElementChild
    // создаю первый цикл, который должен создать 6 строк таблицы с помощью innerHTML
    for(let i = 0; i < 6; i++){
        tbody.innerHTML += "<tr></tr>"
        let tr = tbody.childNodes[i]
        //следующий цикл создаст столбцы и заполнит табоицу числами
        for(let v = 0; v < 5; v++) {
            // Использую условный оператор для того, чтобы соответствующие числа пометить оранжевым цветом, через innerHTML вношу сами числа в клетки таблицы
            if (array[num] >= 50) {
                tr.innerHTML += `<td style="background-color: orange;">${array[num]}</td>`
            } else {
                tr.innerHTML += `<td>${array[num]}</td>`
            }
            num++
        }
    }
}
// сразу вызываю функцию, чтобы таблица появлялась при открытии страницы
createTable()

// Создаю переменную, которую буду использовать как счетчик новых ячеек в строке
let newK = 0;
let tbody = document.body.firstElementChild.firstElementChild;
tbody.innerHTML += "<tr></tr>";
// Следующая функция будет привязана к кнопке и будет создавать новые ячейки таблицы
function addNewElem() {
    // генерируем новое число для добавления
    let newnum = Math.floor(Math.random() * 99)
    // Если счетчик имеет значение меньше 5, условный оператор добавит ячейку
    if(newK < 5) {
        let lastTr = tbody.lastElementChild
        if (newnum >= 50) {
            lastTr.innerHTML += `<td style="background-color: orange;">${newnum}</td>`
        } else {
            lastTr.innerHTML += `<td>${newnum}</td>`
        }
        // После добавления, значение счетчика увеличивается на 1
        newK++
        // когда счетчик иммет значение 5, создается новая строка
    } else {
        tbody.innerHTML += "<tr></tr>"
        let lastTr = tbody.lastElementChild
        if (num >= 50) {
            lastTr.innerHTML += `<td style="background-color: orange;">${newnum}</td>`
        } else {
            lastTr.innerHTML += `<td>${newnum}</td>`
        }
        // после этого значение счетчика откатывается
        newK = 1
    }
}
