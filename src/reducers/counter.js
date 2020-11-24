export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'Decrement':
            return state - 1;
        default: return state;
    }
}

export const chatCounter = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default: return state;
    }
}

export const groups = (state = [], action) => {
    switch (action.type) {
        case 'Set_data':
            console.log("bbb"+action.payload);
            return { ...state, payload: action.payload };
        case 'POP':
            let newState = {...state};
            newState["payload"].splice(newState["payload"].length-1);
            return newState
        default:
            return state;
    }
}

export const user = (state = [], action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'Set_user':
            return { ...state, payload: action.payload };
        default:
            return state;
    }
}

export const coming = (state = [], action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'Set_coming':
            return { ...state, payload: action.payload };
        default:
            return state;
    }
}
export const suggest = (state = [], action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'Set_suggest':
            return { ...state, payload: action.payload };
        default:
            return state;
    }
}

export const groupUser = (state = [], action) => {
    switch (action.type) {
        case 'Set_groupuser':
            return { ...state, payload: action.payload };
        default:
            return state;
    }
}

export const res = (state = [], action) => {
    switch (action.type) {
        case 'Set_res':
            return { ...state, payload: action.payload };
        default:
            return state;
    }
}

export const signup = (state = [], action) => {
    switch (action.type) {
        case 'Set_signup':
            return { ...state, payload: action.payload };
        default:
            return state;
    }
}

export const sendMail = (state = [], action) => {
    switch (action.type) {
        case 'Set_mail':
            return { ...state, payload: action.payload };
        default:
            return state;
    }
}

export const chatRoom = (state = '', action) => {
    switch (action.type) {
        case 'Add':
            return { ...state, payload: action.payload };
        default:
            return state;
    }
}

export const chatTag = (state = [], action) => {
    switch (action.type) {
        case 'chatTag':
            return { ...state, payload: action.payload };
        default:
            return state;
    }
}

export const accept = (state = '', action) => {
    switch (action.type) {
        case 'set_accept':
            return { ...state, payload: action.payload };
        default:
            return state;
    }
}