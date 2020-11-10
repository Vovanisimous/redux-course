import './styles.css'

// Привязка переменных к элементам в index.html
const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

let state = 0;

function render() {
    // Добавление переменной state к span элементу counter в качестве строки
    counter.textContent = state.toString()
}

// Ивент лисенеры на клик. В конце каждой функции вызывается render, который перерисовывает всю страницу
addBtn.addEventListener('click', () => {
    state++
    render()
})

subBtn.addEventListener('click', () => {
    state--
    render()
})

asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        state++
        render()
    }, 2000)
})

themeBtn.addEventListener('click', () => {
    // Обращение к мета тэгу body, обращение к его классам, вызов метода toggle, который добавляет и убирает определенный класс
    document.body.classList.toggle('dark')
})

// Перерисовка страницы
render()