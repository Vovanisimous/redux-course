import {CHANGE_THEME, DECREMENT, INCREMENT} from "./types";
import {combineReducers} from "redux";

// Тут все reducers, которые относятся к counter. Initial state передается сразу в зависимость функции (здесь = 0). Reducers написаны ввиде if/else,
// но в реальных проектах используется switch!
function counterReducer(state = 0, action) {
    // Если сюда приходит action с action.type === INCREMENT, то выполняется state + 1
    if (action.type === INCREMENT) {
        return state + 1;
    }else if (action.type === DECREMENT) {
        return state - 1;
    }
    // При инициализации проекта state будет равен initial state, который мы сюда передали
    return state
}

// Иногда initial states нужно сначала написать в виде констант для легкой читаемости кода
const initialThemeState = {
    value: "light"
}

// Тут reducers, котрые относятся к theme
function themeReducer(state = initialThemeState, action) {
    // для определения action.type используется switch
    switch (action.type) {
        case CHANGE_THEME:
            // !!! Reducers не должны мутировать исходные состояния !!! Поэтому мы сначала клонируем сотояние, мутируем, и возвращаем клона
            return {...state, value: action.payload}
        default: return state
    }
}

// Метод combineReducers позволяет экспортировать сразу несколько reducers
export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})