const push = (tag) => {
    return {
        type: 'PUSH',
        payload: tag
    }
};


export default { push };