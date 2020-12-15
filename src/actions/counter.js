const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

const auth = () => {
    return {
        type: 'auth'
    }
};

const logSign = (tag) => {
    return {
        type: 'logSign',
        payload: tag
    }
};

const decrement = () => {
    return {
        type: 'Decrement'
    }
};

const reset = () => {
    return {
        type: 'reset'
    }
};

const inc = () => {
    return {
        type: 'INC'
    }
};

const dec = () => {
    return {
        type: 'DEC'
    }
};

const getAsyncData = (tags) => {
    return {
        type: 'Get_async_data',
        payload:tags,
    }
};

const edit = (tags) => {
    return {
        type: 'edit',
        payload:tags,
    }
};

const getAsyncUser = (tags) => {
    return {
        type: 'Get_async_user',
        payload:tags,
    }
};

const coming = (tags) => {
    return {
        type: 'coming',
        payload:tags,
    }
};

const suggest = (tags) => {
    return {
        type: 'suggest',
        payload:tags,
    }
};

const getUsers = (tags) => {
    return {
        type: 'Get_users',
        payload:tags,
    }
};

const signup = (tags) => {
    return {
        type: 'Sign_Up',
        payload:tags,
    }
};
const sendMail = (tags) => {
    return {
        type: 'Send_Mail',
        payload:tags,
    }
};

const leave = (tags) => {
    return {
        type: 'Leave',
        payload:tags,
    }
};

const postAsyncData = (tags) => {
    return {
        type:'Post_async_data',
        payload:tags,
    }
};
const postAsyncCreateData = (tags) => {
    return {
        type:'Post_async_create_group',
        payload:tags,
    }
};

const postAsyncAddData = (tags) => {
    return {
        type:'Post_async_add_user',
        payload:tags,
    }
};

const accept = (tags) => {
    return {
        type:'accept',
        payload:tags,
    }
};

const skip = (tags) => {
    return {
        type:'skip',
        payload:tags,
    }
};

const add = (chatRoom) => {
    return {
        type:'Add',
        payload:chatRoom,
    }
};

const chatTag = (chatTag) => {
    return {
        type:'chatTag',
        payload:chatTag,
    }
}
const pop = () => {
    return {
        type: 'POP'
    }
};
export default {logSign, auth,edit,reset,suggest,coming,leave,accept,skip,pop,increment, decrement, getAsyncData, postAsyncData, add, inc, dec, postAsyncAddData, postAsyncCreateData, getAsyncUser,chatTag, signup,getUsers,sendMail };