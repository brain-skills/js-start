const input = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');
const button = document.querySelector('button');


input.addEventListener('input', function (e) {
	duplicateField.textContent = input.value;
});

button.addEventListener('click', (event) => {
    input.value = null;
    console.log('Работает! Вы ввели: ', duplicateField.textContent);
    duplicateField.textContent = null;
    event.preventDefault();
});