import {CHANGE_THEME, DECREMENT, INCREMENT} from "./types";

// Здесь написаны все actions, для облегчения жизни. Нам не нужно будет в reducer пердавать объекты, а просто функции

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

// Имплементировали асинхронную фунцию, чтобы показать, как она работает
export function asyncIncrement() {
    return function(dispatch) {
        setTimeout(() => {
            // Передали уже написанный action, потому что он выполняет нужную нам логику
            dispatch(increment())
        }, 2000)
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}