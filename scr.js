//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let textBlock = document.getElementById('text');
// textBlock.onclick = () => {
//     textBlock.style.display = 'none';
// }
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// function stylize(myButton)
// {
//     myButton.style.height = '50px';
//     myButton.style.width = '100px';
//     myButton.style.backgroundColor = 'red';
//     myButton.innerText = 'Press me!';
// }
// let myButton = document.createElement('div');
// stylize(myButton);
// document.body.appendChild(myButton);
//
// myButton.onclick = () => {
// myButton.style.display = 'none';
//
// }- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let myForm = document.forms.myForm;
// let text = myForm.text;
// let submit = myForm.submit;
// let age;
// submit.onclick = (e) => {
//     e.preventDefault();
//     age = +text.value;
//     age >= 18 ? alert('Welcome to the club!') : alert('You must be at least 18');
// }

//- Создайте меню, которое раскрывается/сворачивается при клике
// let myMenu = document.querySelector('.menu');
// let listToAppend = document.createElement('ul');
// listToAppend.innerHTML = '<h1>Menu:</h1>'
// let ulCount = 10;
// let li;
// for (let i = 0; i < ulCount; i++) {
//     li = document.createElement('li');
//     li.innerText = `item${i + 1}`;
//     li.style.fontSize = '20px';
//     li.style.fontWeight = 'bold';
//     listToAppend.appendChild(li);
// }
//
// myMenu.onclick = () => {
//     if (myMenu.getAttribute('class') === 'menu') {
//         myMenu.setAttribute('class', 'menu-unfold');
//         myMenu.appendChild(listToAppend);
//     }
//     else {
//         myMenu.removeChild(listToAppend);
//         myMenu.setAttribute('class', 'menu');
//     }
// }
//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'vcxmv', body: 'ueriufdnf'},
//     {title: 'nxcnc', body: 'kdjfkj'},
//     {title: 'loerioierem', body: 'sodpepopwoe'},
//     {title: 'mv,ekl', body: 'uenckzp'},
// ]
//
// let newComment;
// let newBody;
// let bodies = [];
// for (let comment of comments) {
//     newComment = document.createElement('div');
//     newBody = document.createElement('div');
//     newComment.innerHTML += `<h1> ${comment.title}</h1>`;
//     newBody.innerText = comment.body;
//     bodies.push(newBody);
//     newComment.appendChild(newBody);
//     document.body.appendChild(newComment);
// }
//
// for (let body of bodies) {
//     body.onclick = () => {
//         body.style.display = 'none';
//     }
// }
// /- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let firstForm = document.forms.firstForm;
// let secondForm = document.forms.secondForm;
// let firstSubmit = document.getElementById('submit1');
// let secondSubmit = document.getElementById('submit2');
// firstSubmit.onclick = () => {
//     console.log(firstForm.text1.value, firstForm.text2.value);
// }
// secondSubmit.onclick = () => {
//     console.log(secondForm.text3.value, secondForm.text4.value);
// }
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// function createTable(rows, columns, content) {
//     let table = document.createElement('table');
//     let newRow;
//     let newColumn;
//     for (let i = 0; i < rows; i++) {
//         newRow = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             newColumn = document.createElement('td');
//             newColumn.innerText = content;
//             newRow.appendChild(newColumn);
//         }
//         table.appendChild(newRow);
//     }
//
//     return table;
// }
//
// let rows = 0;
// let columns = 0;
// let content = '';
// document.getElementById('submit').onclick = () => {
//     let form = document.forms.tableForm;
//     rows = +form.rows.value;
//     columns = +form.columns.value;
//     content = form.content.value;
//     let table = createTable(rows, columns, content);
//     document.body.appendChild(table);
// }
//



// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
// function checkForBadWords(sentence, badWords)
// {
//     for (let badWord of badWords) {
//         let n = sentence.search(badWord);
//         if (n !== -1) {
//             alert(`Ах ти ж! Що це за слово ${badWord}?`);
//             return;
//         }
//     }
// }
//
// let badWords = ['сука','блять','пізда','хуй'];
// let myForm = document.forms.form;
// document.getElementById('submit').onclick = () => {
//     let sentence = myForm.sentence.value;
//     checkForBadWords(sentence, badWords);
// }
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// function stylize(menu)
// {
//     menu.style.display = 'flex';
//     menu.style.flexDirection = 'column';
//     menu.style.position = 'absolute';
//     menu.style.right = '10px';
//     menu.style.top = '10px';
//     menu.style.height = '400px';
//     menu.style.width = '300px';
//     menu.style.backgroundColor = 'lightblue';
// }
//
// let titles = document.getElementsByTagName('h2');
// let menu = document.getElementById('content');
// stylize(menu);
//
// let newRef;
// let i = 0;
// for (let title of titles) {
//     title.setAttribute('id', i++);
//     newRef = document.createElement('a');
//     newRef.setAttribute('href', `#${title.getAttribute('id')}`);
//     newRef.innerText = `${title.innerText}`;
//     menu.appendChild(newRef);
//     menu.innerHTML += '<br>';
// }

// -- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 20, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 17, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 18, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 21, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// debugger;
let filtersForm = document.forms.filters;
let statusFilter = filtersForm.statusFilter;
let ageFilter = filtersForm.ageFilter;
let cityFilter = filtersForm.cityFilter;

let submitButton = document.querySelector('#submit');
submitButton.onclick = () => {
    let filterByStatus = statusFilter.checked;
    let filterByAge = ageFilter.checked;
    let filterByCity = cityFilter.checked;
    let filteredUsers = filter(usersWithAddress, filterByStatus, filterByAge, filterByCity);
    drawUsers(filteredUsers);
}

function filter(users, filterByStatus, filterByAge, filterByCity) {
    let predicate1 = (value) => {
        return filterByStatus ? value.status === false : false;
    }
    let predicate2 = (value) => {
        return filterByAge ? value.age >= 29 : false;
    }
    let predicate3 = (value) => {
        return filterByCity ? value.address.city === 'Kyiv' : false;
    }

    let filtered = users.filter(value => predicate1(value) || predicate2(value) || predicate3(value));
    return filtered;
}

function drawUsers(users) {
    for (let user of users) {
        let userBlock = document.createElement('div');
        userBlock.innerText = `User ${user.name}, who is ${user.age} years old and lives in ${user.address.city} (status: ${user.status})`;
        document.body.appendChild(userBlock);
    }
    document.body.appendChild(document.createElement('hr'));
}