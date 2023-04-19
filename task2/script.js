document.querySelector('#consoleLog').onclick = function() {
    console.log('Метод для вывода сообщения в консоль сработал, после нажатия на эллемент c id="consoleLog"');
    alert('Метод сработал ! Проверьте консоль !');
};

document.querySelector('#alert').onclick = function() {
    alert('Пример использования alert, после нажатия на эллемент c id="alert"');
};

const promptTag = document.querySelector('#prompt');
promptTag.onclick = function() {
    const promptValue = prompt('Напишите любой текст и нажмите ОК чтобы увидеть его в консоли');
    console.log('Вы ввели текст: ', promptValue ,'- в prompt окне!');
};