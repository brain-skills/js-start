const input = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');

document.querySelector('button').addEventListener('click', (event) => {
    const inputPrompt = prompt('Введите ваш текст');
    input.value = inputPrompt;
    event.preventDefault();
    duplicateField.textContent = input.value;
    input.value = '';
    console.log('Введенный текст: ', inputPrompt ,' получен !');
});

//