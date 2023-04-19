const targetLink = document.querySelector('#targetLink');

targetLink.onclick = function(event) {
    console.log('Вы нажали на ссылку и вызвали метод prompt()');
    const targetPrompt = prompt('Введите текст чтобы сменить ссылке название');
    console.log('Вы ввели новое значение: ', targetPrompt);
    targetLink.textContent = targetPrompt;
    event.preventDefault();
};