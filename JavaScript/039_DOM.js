// 해당하는 Id를 가진 요소에 접근하기
document.getElementById();

// 해당하는 모든 요소에 접근하기
document.getElementsByTagName();

// 해당하는 클래스를 가진 모든 요소에 접근하기
document.getElementsByClassName();

// css 선택자로 단일 요소에 접근하기
document.querySelector("selector");

// css 선택자로 여러 요소에 접근하기
document.querySelectorAll("selector");

const btnRed = document.querySelector('button')
const title = document.querySelector('#one')

btnRed.addEventListener('click', () => {
    title.classList.toggle('red')
})

const sectionTitle = document.createElement('h2')
sectionTitle.innerText = 'hello'

/////////////////////

const btn = document.createElement('button')
btn.innerText = '눌럿!'
const body = document.querySelector("body")
body.append(btn)

btn.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(this); // 일반 function과 다르다.
});