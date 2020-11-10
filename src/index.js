import {applyMiddleware, createStore} from "redux";
// Позволяет писать асинхронные изменения состояний
import thunk from "redux-thunk";
// Красиво логгирует изменения состояний в консоль
import {logger} from "redux-logger";

import './styles.css'
import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, changeTheme, decrement, increment} from "./redux/actions";


// Привязка переменных к элементам в index.html
const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')


// Создаем зранилище через Redux, в который мы передаем наш reducer и middlewares
const store = createStore(rootReducer, applyMiddleware(thunk, logger));


addBtn.addEventListener('click', () => {
    // Передаем команду изменения состояния. Функция increment() возвращает объект с обязательным ключем type и необязательным ключем payload;
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    // Передаем команду изменения состояния. Функция decrement() возвращает объект с обязательным ключем type и необязательным ключем payload;
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    // Передаем команду изменения состояния. Функция asyncIncrement() возвращает объект с обязательным ключем type и необязательным ключем payload;
    store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', () => {
    // Проверяем какое значение имеет класс компонента body и передаем ему нужный
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
    // Передаем команду изменения состояния, но на этот раз передаем еще и payload, в котором заключается значение, которое мы хотим передать состоянию
    store.dispatch(changeTheme(newTheme))
})

// Подписываемся на любое изменение состояния в store
store.subscribe(() => {
    // Передаем state значение состояний в store
    const state = store.getState()
    // Добавление переменной state.counter к span элементу counter в качестве строки
    counter.textContent = state.counter;
    // Передает переменную state.theme.value к классу компонента body
    document.body.className = state.theme.value
})

// Инициализация всех состояний в store про прогрузке страницы
store.dispatch({type: 'INIT_APPLICATION'})




