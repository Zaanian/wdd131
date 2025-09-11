const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

const newline = document.createElement('li');
const deletebutton = document.createElement('button');

newline.textContent = input.value;
deletebutton.textContent = 'X';

newline.append(deletebutton);
newline.append(li);

