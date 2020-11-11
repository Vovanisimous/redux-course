import {CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types";

// Здесь написаны все actions, для облегчения жизни. Нам не нужно будет в reducer пердавать объекты, а просто функции

export function increment() {
    return {
        type: INCREMENT
    }
}

export function enableButtons() {
    return {
        type: ENABLE_BUTTONS
    }
}

export function disableButtons() {
    return {
        type: DISABLE_BUTTONS
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

// Имплементировали асинхронную фунцию, чтобы показать, как она работает
export function asyncIncrement() {
    // const addBtn = document.getElementById('add')
    // const subBtn = document.getElementById('sub')
    // const asyncBtn = document.getElementById('async')

    return function(dispatch) {
        dispatch(disableButtons())
        // addBtn.disabled = true
        // subBtn.disabled = true
        // asyncBtn.disabled = true

        setTimeout(() => {
            // Передали уже написанный action, потому что он выполняет нужную нам логику
            dispatch(increment())
            dispatch(enableButtons())
            // addBtn.disabled = false
            // subBtn.disabled = false
            // asyncBtn.disabled = false
        }, 2000)
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}