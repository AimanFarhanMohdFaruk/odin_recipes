const container = document.querySelector('#container');

const content = document.createElement('div');
const para = document.createElement('p');
const heading3 = document.createElement('h3');
const newDiv = document.createElement('div')
const btn = document.querySelector("#btn");

btn.addEventListener ("click", (e) => {
    e.target.style.background = 'blue';
    testFunc();
});

const testFunc = () => {
    console.log("HelloWorld, I'm working!")
}

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

para.style.color ='red';
para.textContent = `Hey I'm red!`

heading3.style.color = 'blue';
heading3.textContent = `I'm a blue h3!`

newDiv.style.backgroundColor = 'pink';
newDiv.innerHTML =
`
<h1>I'm in a div</h1>
<p> ME TOO!</p>
`



container.appendChild(content);
container.appendChild(para)
container.appendChild(heading3)
container.appendChild(newDiv);