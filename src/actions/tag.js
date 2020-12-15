const push = (tag) => {
    return {
        type: 'PUSH',
        payload: tag
    }
};
const tag_pop = ()=>{
    return{
        type:'POP'
    }
};


export default { push,tag_pop };