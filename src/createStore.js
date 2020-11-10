// Здесь мы попытались написат свой createStore, который есть в Redux, чтобы понять, как он работает. эта функция нигде не будет использоваться

export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, {type: "__INIT__"});
    const subscribers = [];

    return {
        // action === {type: string}
        dispatch(action) {
            state = rootReducer(state, action)
            subscribers.forEach(sub => sub())
        },
        // Callback - функция, которая вызовится, когда что-то произойдет
        subscribe(callback) {
            subscribers.push(callback);
        },
        // Позволяет следить за изменением в состоянииб возвращая ее
        getState() {
            return state;
        }
    }
}