'use strict';

class Book {
	constructor(image, author, name, year) {
		this.image = image;
		this.author = author;
		this.name = name;
		this.year = year;
	}

	log() {
		console.log(this.image);
		console.log(this.author);
		console.log(this.name);
		console.log(this.year);
	}
}


// функция для создания таблицы
function createTable() {
	if (books.length == 0) {
		table.textContent = 'Книг нет, но вы держитесь';
		return;
	}
	for (let i = 0; i < books.length; i++) {
		if (books[i] === '') continue;
		table.append(document.createElement('tr'));
	
		let div = document.createElement('div');
		div.className = 'image';
		table.children[i].append(div);
	
		div = document.createElement('div');
		div.className = 'info';
		table.children[i].append(div);
	
		div = document.createElement('div');
		div.className = 'manage';
		table.children[i].append(div);
	
		let image = document.createElement('img');
		image.src = books[i].image;
		table.children[i].firstChild.append(image);
	
		let name = document.createElement('p');
		name.textContent = books[i].name;
		name.style.cssText = `font-size: 25px; font-weight: bold;`;
	
		let author = document.createElement('p');
		author.textContent = books[i].author;
	
		let year = document.createElement('p');
		year.textContent = books[i].year + ' г.';
	
		table.children[i].children[1].append(name, author, year);
	
		let [buttonEdit, buttonDel] = [document.createElement('input'), document.createElement('input')];
		buttonEdit.value = 'Редактировать';
		buttonEdit.name = 'edit';
		buttonEdit.type = 'button';
		//buttonEdit.onclick = editInfo;
	
		buttonDel.value = 'Удалить';
		buttonDel.name = 'delete';
		buttonDel.type = 'button';
		buttonDel.setAttribute('id', i)
		buttonDel.addEventListener('click', deleteBook);
	
		table.children[i].children[2].append(buttonEdit, buttonDel);
	}
}


// создаем массив и помещаем в него книги
let books = [];

books.push(new Book('https://s1.livelib.ru/boocover/1001440002/o/8cf5/Mihail_Sholohov__Sudba_cheloveka.jpeg', 'Михаил Шолохов', 'Судьба человека', 1956));
books.push(new Book('https://s1.livelib.ru/boocover/1000006896/o/ad9b/Chak_Palanik__Bojtsovskij_klub.jpeg', 'Чак Паланик', 'Бойцовский клуб', 1996));
books.push(new Book('https://s1.livelib.ru/boocover/1001488917/o/36bd/Sergej_Dovlatov__Chemodan_sbornik.jpeg', 'Сергей Довлатов', 'Чемодан', 1986));
books.push(new Book('https://s1.livelib.ru/boocover/1000108036/o/de28/Teru_Miyamoto__Uzorchataya_parcha.jpeg', 'Тэру Миямото', 'Узорчатая парча', 1982));
books.push(new Book('https://s1.livelib.ru/boocover/1001534634/o/d5e6/Stiven_King__Lavka_durnyh_snov_sbornik.jpeg', 'Стивен Кинг', 'Лавка дурных снов', 2015));


// создаем таблицу
let table = document.createElement('table');
container.append(table);


// добавляем содержимое массива в таблицу
createTable();


// обработка событий
function deleteBook() {
	books.splice(+this.id, 1);
	table.innerHTML = '';
	createTable();
}


// function editInfo() {
// 	let div = document.createElement('div');
// 	div.className = 'editContainer';
// 	if (!document.body.querySelector('editContainer')) document.body.prepend(div);
// 	console.log(document.body.querySelector('editContainer'));
// }
