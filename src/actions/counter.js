const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

const decrement = () => {
    return {
        type: 'Decrement'
    }
};

const getAsyncData = () => {
    return {
        type: 'Get_async_data'
    }
};

export default { increment, decrement, getAsyncData };