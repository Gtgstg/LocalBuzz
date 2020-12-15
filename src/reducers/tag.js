const tag = (state = [], action) => {
    switch (action.type) {
        case 'PUSH':
            return [...state, action.payload];
        case 'reset':
            return []
        case 'POP':
            const item = [...state.filter((_,i)=>i!==state.length-1)]
            console.log(item)
            return item
        default: return state;
    }
}


export default tag;