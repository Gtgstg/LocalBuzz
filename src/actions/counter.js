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
const postAsyncData = (tags) => {
    return {
        type:'Post_async_data',
        payload:tags,
    }
};

export default { increment, decrement, getAsyncData, postAsyncData };