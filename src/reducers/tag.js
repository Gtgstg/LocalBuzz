const tag = (state = [], action) => {
    switch (action.type) {
        case 'PUSH':
            return [...state, action.payload];
        default: return state;
    }
}


export default tag;