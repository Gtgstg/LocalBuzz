export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'Decrement':
            return state - 1;
        default: return state;
    }
}

export const customAsyncData = (state = '', action) => {
    switch (action.type) {
        case 'Set_data':
            return { ...state, payload: action.payload };
        default:
            return state;
    }
}
