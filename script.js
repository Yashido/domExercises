const container =document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para');
para.textContent = 'Hey I\'m red';

para.style.color = 'red';

container.appendChild(para);

const headerthree = document.createElement('h3');
headerthree.classList.add('hthree');
headerthree.textContent = 'I\'m a blue h3!';
headerthree.style.color = 'blue';

container.appendChild(headerthree);

const ncont = document.createElement('div');
ncont.classList.add('conten');
ncont.style.border = 2;
ncont.style.borderColor = 'black';
ncont.style.backgroundColor = 'pink';

const paratwo = document.createElement('p');
paratwo.classList.add




container.appendChild(ncont);